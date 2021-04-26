const faunadb = require("faunadb");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

const respond = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
});

const faunaDbSucksGet = async (key, first, last) => {
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

const faunaDbSucksPost = async (data = {}) => {
  try {
    const result = await client.query(
      q.Create(q.Collection("actions"), { data })
    );

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

exports.handler = async (event) => {
  const { first = "", last = "" } = event.queryStringParameters;

  if (!first || !last) {
    await faunaDbSucksPost({
      first,
      last,
      success: false,
      action: "login",
      error: "no first and/or last",
    });
    return respond(400, { error: "First and last name are required" });
  }

  const primary = await faunaDbSucksGet("guest", first, last);
  const secondary = await faunaDbSucksGet("partner", first, last);
  const rsvp = primary || secondary;

  if (!rsvp) {
    await faunaDbSucksPost({
      first,
      last,
      success: false,
      action: "login",
      error: "no rsvp",
    });
    return respond(400, { error: true, errorCode: "lemur-1" });
  }

  await faunaDbSucksPost({
    first,
    last,
    success: true,
    action: "login",
    rsvpId: rsvp.id,
  });

  if (!rsvp.responded) {
    await faunaDbSucksPut(rsvp.id, { responded: false });
  }

  return respond(200, rsvp);
};
