const INDEX_KEYS = {
  GUEST: "guest",
  PARTNER: "partner",
};

const TYPES = {
  FAMILY_PIZZA: "family-pizza",
  FAMILY: "family",
  FRIENDS_PIZZA: "friends-pizza",
  FRIENDS: "friends",
  OFFICIANT: "officiant",
};

const KEYS_GET = {
  ATTENDING: "attending",
  BY_USER: "byUser",
  RESPONSE: "response",
};

const KEYS_VALUES = Object.values(KEYS_GET);

const RESPONSE_KEYS = {
  BRUNCH: "brunch",
  CEREMONY: "ceremony",
  FAMILY_PIZZA: "familyPizza",
  FRIENDS_PIZZA: "friendsPizza",
  PARTY: "party",
  WELCOME_DINNER: "welcomeDinner",
  WELCOME_DRINKS: "welcomeDrinks",
};

const RESPONSE_KEYS_VALUES = Object.values(RESPONSE_KEYS);

const KEYS = {
  FIRST: "first",
  LAST: "last",
  EMAIL: "email",
  COUNT: "count",
  PARTNER_EMAIL: "partnerEmail",
  PARTNER_FIRST: "partnerFirst",
  PARTNER_LAST: "partnerLast",
  TYPE: "type",
  RESPONDED: "responded",
  ATTENDING: KEYS_GET.ATTENDING,
  BY_USER: KEYS_GET.BY_USER,
  ...RESPONSE_KEYS,
  TEST: "test",
};

const FAMILY_PIZZA = {
  attire: "",
  date: "Weds Sept 15th",
  dateShort: "9/15",
  key: RESPONSE_KEYS.FAMILY_PIZZA,
  location: "Our apartment, East Village",
  time: "6pm - 9pm",
  title: "Family Pizza Party",
  toFollow: "",
};

const FRIENDS_PIZZA = {
  attire: "",
  date: "Thurs Sept 16th",
  dateShort: "9/16",
  key: RESPONSE_KEYS.FRIENDS_PIZZA,
  location: "Our apartment, East Village",
  time: "7pm - 10pm",
  title: "Pizza Party",
  toFollow: "",
};

const WELCOME_DRINKS = {
  attire: "New York-night-out attire",
  date: "Fri Sept 17th",
  dateShort: "9/17",
  key: RESPONSE_KEYS.WELCOME_DRINKS,
  location: "Royale",
  time: "8pm - 10pm",
  title: "Welcome Drinks",
  toFollow: "New York-night-out attire required.",
};

const WELCOME_DINNER = {
  attire: "New York-night-out attire",
  date: "Fri Sept 17th",
  dateShort: "9/17",
  key: RESPONSE_KEYS.WELCOME_DINNER,
  location: "Royale",
  time: "6pm - 8pm",
  title: "Welcome Dinner",
  toFollow: `New York-night-out attire required. Welcome Drinks to follow from ${WELCOME_DRINKS.time} at ${WELCOME_DRINKS.location}.`,
};

const PARTY = {
  attire: "Cocktail attire",
  date: "Sat Sept 18th",
  dateShort: "9/18",
  key: RESPONSE_KEYS.PARTY,
  location: "Turk's Inn, Bushwick",
  time: "6pm - 12am",
  title: "Party",
  toFollow: "Cocktail attire required.",
};

const CEREMONY = {
  attire: "Cocktail attire",
  date: "Sat Sept 18th",
  dateShort: "9/18",
  key: RESPONSE_KEYS.CEREMONY,
  location: "Turk's Inn, Bushwick",
  time: "5pm - 6pm",
  title: "Ceremony",
  toFollow: `Cocktail attire required. Party to follow from ${PARTY.time} at ${PARTY.location}.`,
};

const BRUNCH = {
  attire: "",
  date: "Sun Sept 19th",
  dateShort: "9/19",
  key: RESPONSE_KEYS.BRUNCH,
  location:
    "Stuyvesant Square Park (West of 2nd Ave), 9 Rutherford Pl, New York, NY 10003",
  time: "11am - 1pm",
  title: "Farewell Bites (NEW LOCATION)",
  toFollow: "",
};

const EVENTS = {
  BRUNCH,
  CEREMONY,
  FAMILY_PIZZA,
  FRIENDS_PIZZA,
  PARTY,
  WELCOME_DINNER,
  WELCOME_DRINKS,
};

const ATTENDEE_KEYS = {
  ATTENDANCE: "attendance",
  RESPONSE_STATUS: "responseStatus",
};

const ATTENDEE_LIST_KEYS = {
  INVITED: "invited",
  NO: "no",
  YES: "yes",
};

module.exports = {
  ATTENDEE_KEYS,
  ATTENDEE_LIST_KEYS,
  EVENTS,
  KEYS_GET,
  KEYS_VALUES,
  RESPONSE_KEYS_VALUES,
  RESPONSE_KEYS,
  TYPES,
  INDEX_KEYS,
  KEYS,
};
