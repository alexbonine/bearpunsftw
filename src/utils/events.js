const { EVENTS, RESPONSE_KEYS, TYPES } = require("./constants");

const getEvents = (type) => {
  switch (type) {
    case TYPES.FAMILY:
      return [EVENTS.WELCOME_DINNER, EVENTS.CEREMONY, EVENTS.BRUNCH];
    case TYPES.FAMILY_PIZZA:
      return [
        EVENTS.FAMILY_PIZZA,
        EVENTS.WELCOME_DINNER,
        EVENTS.CEREMONY,
        EVENTS.BRUNCH,
      ];
    case TYPES.FRIENDS_PIZZA:
      return [
        EVENTS.FRIENDS_PIZZA,
        EVENTS.WELCOME_DRINKS,
        EVENTS.PARTY,
        EVENTS.BRUNCH,
      ];
    case TYPES.OFFICIANT:
      return [
        EVENTS.FRIENDS_PIZZA,
        EVENTS.WELCOME_DRINKS,
        EVENTS.CEREMONY,
        EVENTS.BRUNCH,
      ];
    case TYPES.FRIENDS:
    default:
      return [EVENTS.WELCOME_DRINKS, EVENTS.PARTY, EVENTS.BRUNCH];
  }
};

const parseResponse = (response, isNotAttending = false) => {
  return Object.keys(response).reduce((accum, key) => {
    const value = isNotAttending ? 0 : response[key] || 0;

    switch (key) {
      case RESPONSE_KEYS.BRUNCH:
        accum[key] = value;
        break;
      case RESPONSE_KEYS.CEREMONY:
        accum[key] = value;
        accum[RESPONSE_KEYS.PARTY] = value;
        break;
      case RESPONSE_KEYS.FAMILY_PIZZA:
        accum[key] = value;
        break;
      case RESPONSE_KEYS.FRIENDS_PIZZA:
        accum[key] = value;
        break;
      case RESPONSE_KEYS.PARTY:
        if (isNotAttending) {
          accum[key] = 0;
        } else {
          accum[key] = response[RESPONSE_KEYS.CEREMONY] || value;
        }
        break;
      case RESPONSE_KEYS.WELCOME_DINNER:
        accum[key] = value;
        accum[RESPONSE_KEYS.WELCOME_DRINKS] = value;
        break;
      case RESPONSE_KEYS.WELCOME_DRINKS:
        if (isNotAttending) {
          accum[key] = 0;
        } else {
          accum[key] = response[RESPONSE_KEYS.WELCOME_DINNER] || value;
        }
        break;
      default:
        break;
    }

    return accum;
  }, {});
};

module.exports = { getEvents, parseResponse };
