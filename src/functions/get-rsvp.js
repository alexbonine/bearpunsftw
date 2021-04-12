const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

const respond = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
});

const faunaDbSucks = async (key, first, last) => {
  try {
    const result = await client.query(
      q.Get(
        q.Match(q.Index(`guests_by_${key}_first_last`), [
          q.Casefold(first),
          q.Casefold(last),
        ])
      )
    );

    return { ...result.data, id: result.ref.id, userKey: key };
  } catch (e) {
    return null;
  }
};

exports.handler = async (event) => {
  const { first = "", last = "" } = event.queryStringParameters;

  if (!first || !last) {
    return respond(400, { error: "First and last name are required" });
  }

  const primary = await faunaDbSucks("guest", first, last);
  const secondary = await faunaDbSucks("partner", first, last);
  const rsvp = primary || secondary;

  if (!rsvp) {
    return respond(400, { error: true, errorCode: "Lemur 1" });
  }

  return respond(200, rsvp);
};
