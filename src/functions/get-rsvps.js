const faunadb = require("faunadb");
const { KEYS } = require("../utils/constants");

const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
});

const INDEX_ORDER = [
  KEYS.FIRST,
  KEYS.LAST,
  KEYS.EMAIL,
  KEYS.COUNT,
  KEYS.PARTNER_EMAIL,
  KEYS.PARTNER_FIRST,
  KEYS.PARTNER_LAST,
  KEYS.TYPE,
  KEYS.RESPONDED,
  KEYS.ATTENDING,
  KEYS.BY_USER,
  KEYS.BRUNCH,
  KEYS.CEREMONY,
  KEYS.FAMILY_PIZZA,
  KEYS.FRIENDS_PIZZA,
  KEYS.PARTY,
  KEYS.WELCOME_DINNER,
  KEYS.WELCOME_DRINKS,
  KEYS.TEST,
];

const respond = (statusCode, body) => ({
  statusCode,
  body: JSON.stringify(body),
});

const faunaDbSucks = async () => {
  try {
    const result = await client.query(
      q.Paginate(q.Match(q.Index("rows")), { size: 200 })
    );

    return result.data.map((resp) =>
      resp.reduce((accum, x, index) => {
        accum[INDEX_ORDER[index]] = x;

        return accum;
      }, {})
    );
  } catch (e) {
    return null;
  }
};

exports.handler = async (event) => {
  const { pw } = event.queryStringParameters;

  if (!pw || pw !== process.env.COUNTS_PW) {
    return respond(400, { error: "Invalid pw" });
  }

  const counts = await faunaDbSucks();

  return respond(
    200,
    counts.filter(({ test }) => !test)
  );
};
