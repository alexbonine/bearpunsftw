const faunadb = require("faunadb");
const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const {
  KEYS_GET,
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

const faunaDbSucksPostAction = async (data = {}) => {
  try {
    const result = await client.query(
      q.Create(q.Collection("actions"), { data })
    );

    return { ...result.data, id: result.ref.id };
  } catch (e) {
    return null;
  }
};

const faunaDbSucksPostEmail = async (data = {}) => {
  try {
    const result = await client.query(
      q.Create(q.Collection("emails"), { data })
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
        case KEYS_GET.ATTENDING:
          if (typeof data[key] === "boolean") {
            accum[key] = data[key];
          }
          break;
        case KEYS_GET.BY_USER:
          if (typeof data[key] === "string") {
            accum[key] = data[key];
          }
          break;
        case KEYS_GET.RESPONSE:
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
      to: process.env.MAILGUN_SENDER,
    };
  }

  return {
    subject: "New RSVP!!",
    text: `${names}${getEnglishEvents(current).join("\n")}`,
    to: process.env.MAILGUN_SENDER,
  };
};

const getUserEmailAttending = (current) => {
  const { byUser, count, email, first, partnerEmail, partnerFirst } = current;
  let names = "";
  let to = [];

  if (count <= 1) {
    names = first;
    to.push(email);
  } else if (
    RESPONSE_KEYS_VALUES.some((responseKey) => current[responseKey] === count)
  ) {
    names = `${byUser} & ${byUser === first ? partnerFirst : first}`;
    to.push(email);

    if (partnerEmail) {
      to.push(partnerEmail);
    }
  } else {
    names = byUser;
    to.push((byUser === partnerFirst && partnerEmail) || email);
  }

  const welcomeText = `We can't wait to see you, ${names}!\n\nPlease get vaccinated and keep up with the latest NYC travel guidelines: https://www.nycgo.com/coronavirus-information-and-resources-for-travelers.\n\nBelow is your response for your peace of mind. Please note our capacity is limited. You can revisit https://bearpunsftw.com/rsvp to update your RSVP until July 18th.\n\nSincerely,\nShawna & Alex\n\n`;
  const welcomeHtml = `<p>We can't wait to see you, ${names}!</p><p>Please get vaccinated and keep up with the latest <a href="https://www.nycgo.com/coronavirus-information-and-resources-for-travelers">NYC travel guidelines</a>.</p><p>Below is your response for your peace of mind. Please note our capacity is limited. You can revisit <a href="https://bearpunsftw.com/rsvp">https://bearpunsftw.com/rsvp</a> to update your RSVP until July 18th.</p><p>Sincerely,</p><p>Shawna & Alex</p>`;
  const events = getEnglishEventsUser(current);
  const eventsText = events.join("\n");
  const eventsHtml = `<ul style="margin-block: 0; padding: 0"><ol style="padding: 0">${events.join(
    `</ol><ol style="padding: 0">`
  )}</ol></ul>`;

  return {
    subject: "Carney-Bonine RSVP!!",
    text: `${welcomeText}${eventsText}`,
    html: `${welcomeHtml}${eventsHtml}`,
    to,
  };
};

const getUserEmailNotAttending = (rsvp) => {
  const text = `We're sorry we won't be celebrating with you. Hopefully we'll still be able to see you real soon.\n\nSincerely,\nShawna & Alex\n\n`;

  return {
    subject: "Carney-Bonine RSVP",
    text,
    to: [rsvp.email, rsvp.partnerEmail].filter((email) => !!email),
  };
};

exports.handler = async ({ body, httpMethod, queryStringParameters }) => {
  if (httpMethod !== "PUT" || !queryStringParameters.id) {
    await faunaDbSucksPostAction({
      success: false,
      action: "update",
      error: "no id",
    });
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
    await faunaDbSucksPostAction({
      success: false,
      action: "update",
      error: "bad body",
    });
    return respond(400, { error: true, errorCode: "lemur-3" });
  }

  const previousRsvp = await faunaDbSucksGet(id);
  const { response, ...rest } = data;
  const rsvp = await faunaDbSucksPut(id, { ...response, ...rest });

  if (!rsvp) {
    await faunaDbSucksPostAction({
      success: false,
      action: "update",
      error: "no rsvp",
    });
    return respond(400, { error: true, errorCode: "lemur-4" });
  }

  await faunaDbSucksPostAction({
    success: true,
    action: "update",
    rsvpId: rsvp.id,
  });

  const ourEmail = getOurEmail(rsvp, previousRsvp);
  const userEmail = rsvp.attending
    ? getUserEmailAttending(rsvp)
    : getUserEmailNotAttending(rsvp);

  try {
    await transporter.sendMail({
      from: process.env.MAILGUN_SENDER,
      ...ourEmail,
    });

    await transporter.sendMail({
      from: process.env.MAILGUN_SENDER,
      ...userEmail,
    });

    await faunaDbSucksPostEmail({
      rsvpId: rsvp.id,
      action: "internal",
      ...ourEmail,
    });

    await faunaDbSucksPostEmail({
      rsvpId: rsvp.id,
      action: "external",
      ...userEmail,
    });
  } catch (e) {
    console.log("Issue sending email", rsvp.email);
    console.log("Issue sending email", JSON.stringify(e));
    respond(500, { error: e });
  }

  return respond(200, rsvp);
};
