const INDEX_KEYS = {
  GUEST: "guest",
  PARTNER: "partner",
};

const TYPES = {
  FAMILY_PIZZA: "family-pizza",
  FAMILY: "family",
  FRIENDS_PIZZA: "friends-pizza",
  FRIENDS: "friends",
};

const KEYS = {
  ATTENDING: "attending",
  BY_USER: "byUser",
  RESPONSE: "response",
};

const KEYS_VALUES = Object.values(KEYS);

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

const FAMILY_PIZZA = {
  date: "Weds the 15th",
  key: RESPONSE_KEYS.FAMILY_PIZZA,
  location: "Our apartment, East Village",
  time: "6pm - 9pm",
  title: "Family Pizza Party",
  toFollow: "",
};

const FRIENDS_PIZZA = {
  date: "Thurs the 16th",
  key: RESPONSE_KEYS.FRIENDS_PIZZA,
  location: "Our apartment, East Village",
  time: "7pm - 10pm",
  title: "Pizza Party",
  toFollow: "",
};

const WELCOME_DRINKS = {
  date: "Fri the 17th",
  key: RESPONSE_KEYS.WELCOME_DRINKS,
  location: "TBD",
  time: "8pm - 10pm",
  title: "Welcome Drinks",
  toFollow: "",
};

const WELCOME_DINNER = {
  date: "Fri the 17th",
  key: RESPONSE_KEYS.WELCOME_DINNER,
  location: "TBD",
  time: "6pm - 8pm",
  title: "Welcome Dinner",
  toFollow: `Welcome Drinks to follow from ${WELCOME_DRINKS.time} at ${WELCOME_DRINKS.location}`,
};

const PARTY = {
  date: "Sat the 18th",
  key: RESPONSE_KEYS.PARTY,
  location: "Turk's Inn, Bushwick",
  time: "6pm - 12am",
  title: "Party",
  toFollow: "",
};

const CEREMONY = {
  date: "Sat the 18th",
  key: RESPONSE_KEYS.CEREMONY,
  location: "Turk's Inn, Bushwick",
  time: "5pm - 6pm",
  title: "Ceremony",
  toFollow: `Party to follow from ${PARTY.time} at ${PARTY.location}`,
};

const BRUNCH = {
  date: "Sun the 19th",
  key: RESPONSE_KEYS.BRUNCH,
  location: "TBD",
  time: "11am - 1pm",
  title: "Farewell Bites",
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

module.exports = {
  EVENTS,
  KEYS,
  KEYS_VALUES,
  RESPONSE_KEYS_VALUES,
  RESPONSE_KEYS,
  TYPES,
  INDEX_KEYS,
};
