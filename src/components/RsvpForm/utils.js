export const INDEX_KEYS = {
  GUEST: "guest",
  PARTNER: "partner",
};

export const TYPES = {
  FAMILY_PIZZA: "family-pizza",
  FAMILY: "family",
  FRIENDS_PIZZA: "friend-pizza",
  FRIENDS: "friend",
};

export const KEYS = {
  BRUNCH: "brunch",
  CEREMONY: "ceremony",
  FAMILY_PIZZA: "familyPizza",
  FRIENDS_PIZZA: "friendsPizza",
  PARTY: "party",
  WELCOME_DINNER: "welcomeDinner",
  WELCOME_DRINKS: "welcomeDrinks",
};

const FAMILY_PIZZA = {
  date: "Weds the 15th",
  key: KEYS.FAMILY_PIZZA,
  location: "Our apartment, East Village",
  time: "6pm - 9pm",
  title: "Family Pizza Party",
  toFollow: "",
};

const FRIENDS_PIZZA = {
  date: "Thurs the 16th",
  key: KEYS.FRIENDS_PIZZA,
  location: "Our apartment, East Village",
  time: "7pm - 10pm",
  title: "Pizza Party",
  toFollow: "",
};

const WELCOME_DRINKS = {
  date: "Fri the 17th",
  key: KEYS.WELCOME_DRINKS,
  location: "TBD",
  time: "8pm - 10pm",
  title: "Welcome Drinks",
  toFollow: "",
};

const WELCOME_DINNER = {
  date: "Fri the 17th",
  key: KEYS.WELCOME_DINNER,
  location: "TBD",
  time: "6pm - 8pm",
  title: "Welcome Dinner",
  toFollow: `Welcome Drinks to follow from ${WELCOME_DRINKS.time} at ${WELCOME_DRINKS.location}`,
};

const PARTY = {
  date: "Sat the 18th",
  key: KEYS.PARTY,
  location: "Turk's Inn, Bushwick",
  time: "6pm - 12am",
  title: "Party",
  toFollow: "",
};

const CEREMONY = {
  date: "Sat the 18th",
  key: KEYS.CEREMONY,
  location: "Turk's Inn, Bushwick",
  time: "5pm - 6pm",
  title: "Ceremony",
  toFollow: `Party to follow from ${PARTY.time} at ${PARTY.location}`,
};

const BRUNCH = {
  date: "Sun the 19th",
  key: KEYS.BRUNCH,
  location: "TBD",
  time: "11am - 1pm",
  title: "Farewell Bites",
  toFollow: "",
};

export const getEvents = (type) => {
  switch (type) {
    case TYPES.FAMILY:
      return [WELCOME_DINNER, CEREMONY, BRUNCH];
    case TYPES.FAMILY_PIZZA:
      return [FAMILY_PIZZA, WELCOME_DINNER, CEREMONY, BRUNCH];
    case TYPES.FRIENDS_PIZZA:
      return [FRIENDS_PIZZA, WELCOME_DRINKS, PARTY, BRUNCH];
    case TYPES.FRIENDS:
    default:
      return [WELCOME_DRINKS, PARTY, BRUNCH];
  }
};
