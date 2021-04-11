const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

const respond = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
});

const faunaDbSucks = async (index, formattedName) => {
  try {
    const result = await client.query(
      q.Get(q.Match(q.Index(index), formattedName))
    );

    return { ...result.data, id: result.ref.id };
  } catch (e) {
    return null;
  }
};

exports.handler = async (event) => {
  const { name = "" } = event.queryStringParameters;

  if (!name) {
    return respond(400, { error: "Name is required" });
  }

  const formatedName = name.toLowerCase();
  const primary = await faunaDbSucks("guests_by_name", formatedName);
  const secondary = await faunaDbSucks("guests_by_alternate", formatedName);
  const rsvp = primary || secondary;

  if (!rsvp) {
    return respond(400, { error: true, errorCode: "Lemur 1" });
  }

  return respond(200, rsvp);
};
