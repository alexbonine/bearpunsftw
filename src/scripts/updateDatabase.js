const { readFileSync } = require("fs-extra");
const { join } = require("path");
const parseCsv = require("csv-parse/lib/sync");
const faunadb = require("faunadb");
const { KEYS, RESPONSE_KEYS, TYPES } = require("../utils/constants");

const q = faunadb.query;
let WRITING = false;

const sleep = (ms = 300) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const readFile = (file) => {
  try {
    return readFileSync(file, "utf8");
  } catch (e) {
    throw e;
  }
};

const ZOLA_RSVP_RESPONSES = {
  YES: "Attending",
  NO: "Declined",
  WAITING: "No Response",
};

const GUESTLIST_COLUMN_NAMES = {
  EMAIL: "Email Address",
  FIRST_NAME: "First Name",
  LAST_NAME: "Last Name",
  PARTNER_FIRST_NAME: "Partner First Name",
  PARTNER_LAST_NAME: "Partner Last Name",
  // RELATIONSHIP: "Relationship To Couple",
  COUNT: "Total Definitely Invited",
};

const RSVPS_COLUMN_NAMES = {
  CEREMONY: "Ceremony (Family Only)",
  FAMILY_PIZZA: "Family Pizza",
  BRUNCH: "Farewell Bites",
  FIRST_NAME: "First Name",
  PARTY: "It's Party Time!",
  LAST_NAME: "Last Name",
  FRIENDS_PIZZA: "Pizza & Karaoke in the East Village",
  WELCOME_DINNER: "Welcome Dinner (Family Only)",
  WELCOME_DRINKS: "Welcome Cocktails",
};

const DATABASE_PROPERTIES = {
  EMAIL: "email",
  FIRST: "first",
  LAST: "last",
  PARTNER_EMAIL: "partnerEmail",
  PARTNER_FIRST: "partnerFirst",
  PARTNER_LAST: "partnerLast",
  TYPE: "type",
  COUNT: "count",
  RESPONDED: "responded",
  BRUNCH: RESPONSE_KEYS.BRUNCH,
  CEREMONY: RESPONSE_KEYS.CEREMONY,
  FAMILY_PIZZA: RESPONSE_KEYS.FAMILY_PIZZA,
  FRIENDS_PIZZA: RESPONSE_KEYS.FRIENDS_PIZZA,
  PARTY: RESPONSE_KEYS.PARTY,
  WELCOME_DINNER: RESPONSE_KEYS.WELCOME_DINNER,
  WELCOME_DRINKS: RESPONSE_KEYS.WELCOME_DRINKS,
  ATTENDING: KEYS.ATTENDING,
  BY_USER: KEYS.BY_USER,
};

const keyGuestListByFirstLast = (records = []) =>
  records.reduce((accum, record) => {
    if (!record[GUESTLIST_COLUMN_NAMES.COUNT]) {
      return accum;
    }

    const key = `${record[GUESTLIST_COLUMN_NAMES.FIRST_NAME]}-${
      record[GUESTLIST_COLUMN_NAMES.LAST_NAME]
    }`;
    accum[key] = {};

    accum[key][DATABASE_PROPERTIES.FIRST] =
      record[GUESTLIST_COLUMN_NAMES.FIRST_NAME];
    accum[key][DATABASE_PROPERTIES.LAST] =
      record[GUESTLIST_COLUMN_NAMES.LAST_NAME];
    accum[key][DATABASE_PROPERTIES.EMAIL] =
      record[GUESTLIST_COLUMN_NAMES.EMAIL];
    accum[key][DATABASE_PROPERTIES.COUNT] = parseInt(
      record[GUESTLIST_COLUMN_NAMES.COUNT],
      10
    );
    accum[key][DATABASE_PROPERTIES.PARTNER_FIRST] =
      record[GUESTLIST_COLUMN_NAMES.PARTNER_FIRST_NAME];
    accum[key][DATABASE_PROPERTIES.PARTNER_LAST] =
      record[GUESTLIST_COLUMN_NAMES.PARTNER_LAST_NAME];

    return accum;
  }, {});

const keyRsvpsByFirstLast = (records = []) =>
  records.reduce((accum, record) => {
    const key = `${record[RSVPS_COLUMN_NAMES.FIRST_NAME]}-${
      record[RSVPS_COLUMN_NAMES.LAST_NAME]
    }`;
    accum[key] = {};

    accum[key][DATABASE_PROPERTIES.FIRST] =
      record[RSVPS_COLUMN_NAMES.FIRST_NAME];
    accum[key][DATABASE_PROPERTIES.LAST] = record[RSVPS_COLUMN_NAMES.LAST_NAME];

    if (record[RSVPS_COLUMN_NAMES.FAMILY_PIZZA]) {
      accum[key][DATABASE_PROPERTIES.TYPE] = TYPES.FAMILY_PIZZA;
    } else if (record[RSVPS_COLUMN_NAMES.FRIENDS_PIZZA]) {
      accum[key][DATABASE_PROPERTIES.TYPE] = TYPES.FRIENDS_PIZZA;
    } else if (record[RSVPS_COLUMN_NAMES.CEREMONY]) {
      accum[key][DATABASE_PROPERTIES.TYPE] = TYPES.FAMILY;
    } else if (record[RSVPS_COLUMN_NAMES.PARTY]) {
      accum[key][DATABASE_PROPERTIES.TYPE] = TYPES.FRIENDS;
    } else {
      throw Error(`No proper type: ${JSON.stringify(record)}`);
    }

    return accum;
  }, {});

const setupFaunaDbSucksGet = (client) => async (first, last) => {
  try {
    const result = await client.query(
      q.Get(
        q.Match(q.Index(`guests_by_guest_first_last`), [
          q.Casefold(first),
          q.Casefold(last),
        ])
      )
    );

    return { ...result.data, id: result.ref.id };
  } catch (e) {
    return null;
  }
};

const setupFaunaDbSucksPost = (client) => async ({ id, ...data } = {}) => {
  try {
    console.log(
      `Creating: ${data[DATABASE_PROPERTIES.FIRST]} ${
        data[DATABASE_PROPERTIES.LAST]
      } - ${JSON.stringify(data)}`
    );

    if (!WRITING) {
      return;
    }

    const result = await client.query(
      q.Create(q.Collection("guests"), { data })
    );

    return { ...result.data, id: result.ref.id };
  } catch (e) {
    return null;
  }
};

const setupFaunaDbSucksPut = (client) => async (id, data) => {
  try {
    console.log(
      `Updating: ${data[DATABASE_PROPERTIES.FIRST]} ${
        data[DATABASE_PROPERTIES.LAST]
      } - ${JSON.stringify(data)}`
    );

    if (!WRITING) {
      return;
    }

    const result = await client.query(
      q.Update(q.Ref(q.Collection("guests"), id), { data })
    );

    return { ...result.data, id: result.ref.id };
  } catch (e) {
    return null;
  }
};

const run = async () => {
  if (process.argv[2] === "--write") {
    WRITING = true;
  }

  const config = {
    guestlist: "/Users/bo9/software/bearpunsftw/data/guestlist.csv ",
    rsvps: "/Users/bo9/software/bearpunsftw/data/rsvps.csv",
  };

  const homePath = join(__dirname, "..", "..");
  const envFile = await readFile(join(homePath, ".env"));
  const client = new faunadb.Client({
    secret: envFile.match(/FAUNADB_SECRET=(\w*)/)[1],
  });
  const faunaDbSucksGet = setupFaunaDbSucksGet(client);
  const faunaDbSucksPost = setupFaunaDbSucksPost(client);
  const faunaDbSucksPut = setupFaunaDbSucksPut(client);

  const guestlistCsv = await readFile(join(homePath, "data", "guestlist.csv"));
  const guestlistRecords = parseCsv(guestlistCsv, {
    columns: true,
    skip_empty_lines: true,
  });
  const keyedGuestList = keyGuestListByFirstLast(guestlistRecords);

  const rsvpsCsv = await readFile(join(homePath, "data", "rsvps.csv"));
  const rsvpsRecords = parseCsv(rsvpsCsv, {
    columns: true,
    skip_empty_lines: true,
  });
  const keyedRsvps = keyRsvpsByFirstLast(rsvpsRecords);

  const data = Object.keys(keyedGuestList).map((firstLastKey) => {
    if (!keyedRsvps[firstLastKey]) {
      throw Error(`No corresponding rsvp: ${firstLastKey}`);
    }

    return { ...keyedGuestList[firstLastKey], ...keyedRsvps[firstLastKey] };
  });

  const promises = [];

  for (let i = 0; i < data.length; i += 1) {
    const entry = data[i];

    const previousRecord = await faunaDbSucksGet(
      entry[DATABASE_PROPERTIES.FIRST],
      entry[DATABASE_PROPERTIES.LAST]
    );

    if (previousRecord) {
      await faunaDbSucksPut(previousRecord.id, entry);
    } else {
      await faunaDbSucksPost(entry);
    }

    await sleep();
  }

  await Promise.all(promises);

  console.log("Done!");
};

try {
  run();
} catch (e) {
  console.log(e);
}
