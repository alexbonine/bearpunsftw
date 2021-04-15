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
  "party",
  "ceremony",
  "brunch",
];

const faunaDbSucksGet = async (id) => {
  try {
    const result = await client.query(q.Get(q.Ref(q.Collection("guests"), id)));

    return { ...result.data, id: result.ref.id };
  } catch (e) {
    return null;
  }
};

const faunaDbSucksPut = async (id, data = {}) => {
  try {
    const result = await client.query(
      q.Update(q.Ref(q.Collection("guests"), id), { data })
    );

    return { ...result.data, id: result.ref.id };
  } catch (e) {
    return null;
  }
};

const onlyData = (data = {}) =>
  KEYS.reduce(
    (accum, key) => {
      if (typeof data[key] === "number") {
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

exports.handler = async ({ body, httpMethod, queryStringParameters }) => {
  if (httpMethod !== "PUT" || !queryStringParameters.id) {
    return respond(400, { error: true, errorCode: "lemur-2" });
  }

  const { id } = queryStringParameters;
  let response;

  try {
    response = JSON.parse(body);
  } catch (e) {
    response = {};
  }

  const eventResponse = onlyData(response);

  if (Object.keys(eventResponse).length === 0) {
    return respond(400, { error: true, errorCode: "lemur-3" });
  }

  const previousRsvp = await faunaDbSucksGet(id);
  const rsvp = await faunaDbSucksPut(id, eventResponse);

  if (!rsvp) {
    return respond(400, { error: true, errorCode: "lemur-4" });
  }

  // await transporter.sendMail({
  //   from: process.env.MAILGUN_SENDER,
  //   to: process.env.MAILGUN_SENDER,
  //   ...getEmail(rsvp, previousRsvp),
  // });

  return respond(200, rsvp);
};
