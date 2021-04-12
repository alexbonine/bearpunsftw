const faunadb = require("faunadb");
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

const respond = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
});

const transporter = nodemailer.createTransport(
  mg({
    auth: {
      api_key: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    },
  })
);

const KEYS = [
  "familyPizza",
  "friendsPizza",
  "welcomeDinner",
  "welcomeDrinks",
  "wedding",
  "ceremony",
  "brunch",
];

const faunaDbSucksGet = async (id) => {
  try {
    const result = await client.query(
      q.Get(q.Ref(q.Collection("guests", "id")))
    );

    return { ...result.data, id: result.ref.id };
  } catch (e) {
    return null;
  }
};

const faunaDbSucksPut = async (id, response = {}) => {
  try {
    const result = await client.query(
      q.Update(q.Ref(q.Collection("guests"), id), { response })
    );

    return { ...result.data, id: result.ref.id };
  } catch (e) {
    return null;
  }
};

const onlyData = (data = {}) =>
  Object.keys(data).reduce(
    (accum, key) => {
      if (KEYS.includes(key)) {
        accum[key] = data[key];
      }

      return accum;
    },
    { responded: true }
  );

const camelToSentenceCase = (key) => {
  const result = text.replace(/([A-Z])/g, " $1");

  return result.charAt(0).toUpperCase() + result.slice(1).toLowerCase();
};

const getDataValue = (value) => {
  if (typeof value === "number") {
    return value || 0;
  }

  return "N/A";
};

const getEmail = (current, previous) => {
  if (previous && previous.responded) {
    return {
      subject: "Updated RSVP!!",
      text: KEYS.map(
        (key) =>
          `${camelToSentenceCase(key)}: ${getDataValue(
            current[key]
          )} (was ${getDataValue(previous[key])})`
      ).join("\n"),
    };
  }

  return {
    subject: "New RSVP!!",
    text: KEYS.map(
      (key) => `${camelToSentenceCase(key)}: ${getDataValue(current[key])}`
    ).join("\n"),
  };
};

exports.handler = async ({ body, httpMethod }) => {
  if (httpMethod !== "PUT" || !body.id) {
    return respond(400, { error: true, errorCode: "lemur-2" });
  }

  const eventResponse = onlyData(body);

  if (Object.keys(data).length === 0) {
    return respond(400, { error: true, errorCode: "lemur-3" });
  }

  const previousRsvp = faunaDbSucksGet(body.id);
  const rsvp = faunaDbSucksPut(body.id, eventResponse);

  if (!rsvp) {
    return respond(400, { error: true, errorCode: "lemur-4" });
  }

  await transporter.sendMail({
    from: process.env.MAILGUN_SENDER,
    to: process.env.MAILGUN_SENDER,
    ...getEmail(rsvp, previousRsvp),
  });

  return respond(200, rsvp);
};
