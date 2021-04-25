const faunadb = require("faunadb");
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const {
  KEYS,
  KEYS_VALUES,
  RESPONSE_KEYS,
  RESPONSE_KEYS_VALUES,
  EVENTS,
} = require("../utils/constants");
const { getEvents } = require("../utils/events");

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

const onlyResponseData = (data = {}) =>
  RESPONSE_KEYS_VALUES.reduce(
    (accum, key) => {
      if (typeof data[key] === "number") {
        accum[key] = data[key];
      }

      return accum;
    },
    { responded: true }
  );

const onlyData = (data = {}) =>
  KEYS_VALUES.reduce(
    (accum, key) => {
      switch (key) {
        case KEYS.ATTENDING:
          if (typeof data[key] === "boolean") {
            accum[key] = data[key];
          }
          break;
        case KEYS.BY_USER:
          if (typeof data[key] === "string") {
            accum[key] = data[key];
          }
          break;
        case KEYS.RESPONSE:
          if (typeof data[key] === "object") {
            accum[key] = onlyResponseData(data[key]);
          }
          break;
        default:
          break;
      }

      return accum;
    },
    { responded: true }
  );

const getEnglishEvents = (current, previous) => {
  const events = getEvents(current.type);

  return events.map(
    ({ key, title }) =>
      `${title}: ${current[key]}${previous ? ` (was ${previous[key]})` : ""}`
  );
};

const getEnglishEventsUser = (current) => {
  const events = getEvents(current.type);

  return events.map(
    ({ attire, dateShort, key, title }) =>
      `${dateShort}: ${title} - ${current[key]}${attire ? ` - ${attire}` : ""}`
  );
};

const getOurEmail = (current, previous) => {
  const names = `Name(s): ${current.first} ${current.last}${
    current.partnerFirst
      ? ` & ${current.partnerFirst} ${current.partnerLast}`
      : ""
  }\nStatus: ${current.attending ? "Attending" : "Not attending"}\nBy: ${
    current.byUser
  }\n\n`;

  if (previous && previous.responded) {
    return {
      subject: "Updated RSVP!!",
      text: `${names}${getEnglishEvents(current, previous).join("\n")}`,
    };
  }

  return {
    subject: "New RSVP!!",
    text: `${names}${getEnglishEvents(current).join("\n")}`,
  };
};

const getUserEmailAttending = (current) => {
  const names = `${current.first}${
    current.partnerFirst ? ` & ${current.partnerFirst}` : ""
  }`;
  const welcome = `We can't wait to see you, ${names}!\n\nBelow is your response for your peace of mind. You can return to https://bearpunsftw.com/rsvp to update your RSVP until July 18th.\n\nSincerely,\nShawna & Alex\n\n`;

  return {
    subject: "Carney-Bonine RSVP!!",
    text: `${welcome}${getEnglishEventsUser(current).join("\n")}`,
  };
};

const getUserEmailNotAttending = (current) => {
  const text = `We're sorry we won't be celebrating with you. Hopefully we'll still be able to see you real soon.\n\nSincerely,\nShawna & Alex\n\n`;

  return {
    subject: "Carney-Bonine RSVP",
    text,
  };
};

exports.handler = async ({ body, httpMethod, queryStringParameters }) => {
  if (httpMethod !== "PUT" || !queryStringParameters.id) {
    return respond(400, { error: true, errorCode: "lemur-2" });
  }

  const { id } = queryStringParameters;
  let responseBody;

  try {
    responseBody = JSON.parse(body);
  } catch (e) {
    responseBody = {};
  }

  const data = onlyData(responseBody);

  if (Object.keys((data && data.response) || {}).length === 0) {
    return respond(400, { error: true, errorCode: "lemur-3" });
  }

  const previousRsvp = await faunaDbSucksGet(id);
  const { response, ...rest } = data;
  const rsvp = await faunaDbSucksPut(id, { ...response, ...rest });

  if (!rsvp) {
    return respond(400, { error: true, errorCode: "lemur-4" });
  }

  const ourEmail = getOurEmail(rsvp, previousRsvp);
  const userEmail = rsvp.attending
    ? getUserEmailAttending(rsvp)
    : getUserEmailNotAttending(rsvp);

  try {
    await transporter.sendMail({
      from: process.env.MAILGUN_SENDER,
      to: process.env.MAILGUN_SENDER,
      ...ourEmail,
    });

    const userEmails = [rsvp.email, rsvp.partnerEmail].filter(
      (email) => !!email
    );

    if (userEmails.length) {
      await transporter.sendMail({
        from: process.env.MAILGUN_SENDER,
        to: userEmails,
        ...userEmail,
      });
    }
  } catch (e) {
    console.log("Issue sending email", rsvp.email);
    console.log("Issue sending email", JSON.stringify(e));
    respond(500, { error: e });
  }

  return respond(200, rsvp);
};
