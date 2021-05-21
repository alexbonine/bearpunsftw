import {
  ATTENDEE_KEYS,
  ATTENDEE_LIST_KEYS,
  EVENTS,
  KEYS,
  RESPONSE_KEYS_VALUES,
} from "utils/constants";
import { getEvents } from "utils/events";

const getInit = () => ({
  counts: {
    [ATTENDEE_LIST_KEYS.YES]: 0,
    [ATTENDEE_LIST_KEYS.NO]: 0,
    [ATTENDEE_LIST_KEYS.INVITED]: 0,
  },
  lists: {
    [ATTENDEE_LIST_KEYS.YES]: [],
    [ATTENDEE_LIST_KEYS.NO]: [],
    [ATTENDEE_LIST_KEYS.INVITED]: [],
  },
});

const getAttendee = ({ first, last, partnerFirst, partnerLast }, eventCount) =>
  `${first} ${last}${
    partnerFirst ? `/${partnerFirst} ${partnerLast}` : ""
  } (${eventCount})`;

const setAccum = (accum, row, key, set, num = 1) => {
  switch (set) {
    case ATTENDEE_LIST_KEYS.YES:
      accum[key].counts[ATTENDEE_LIST_KEYS.YES] += num;
      accum[key].lists[ATTENDEE_LIST_KEYS.YES].push(getAttendee(row, num));
      break;
    case ATTENDEE_LIST_KEYS.NO:
      accum[key].counts[ATTENDEE_LIST_KEYS.NO] += num;
      accum[key].lists[ATTENDEE_LIST_KEYS.NO].push(getAttendee(row, num));
      break;
    case ATTENDEE_LIST_KEYS.INVITED:
      accum[key].counts[ATTENDEE_LIST_KEYS.INVITED] += num;
      accum[key].lists[ATTENDEE_LIST_KEYS.INVITED].push(getAttendee(row, num));
      break;
    default:
      break;
  }

  return accum;
};

export const parseRows = (rows) =>
  rows.reduce(
    (accum, row) => {
      if (row[KEYS.RESPONDED]) {
        setAccum(
          accum,
          row,
          ATTENDEE_KEYS.RESPONSE_STATUS,
          ATTENDEE_LIST_KEYS.YES
        );
      } else if (row[KEYS.RESPONDED] === false) {
        setAccum(
          accum,
          row,
          ATTENDEE_KEYS.RESPONSE_STATUS,
          ATTENDEE_LIST_KEYS.NO
        );
      } else {
        setAccum(
          accum,
          row,
          ATTENDEE_KEYS.RESPONSE_STATUS,
          ATTENDEE_LIST_KEYS.INVITED
        );
      }

      if (row[KEYS.ATTENDING]) {
        setAccum(
          accum,
          row,
          ATTENDEE_KEYS.ATTENDANCE,
          ATTENDEE_LIST_KEYS.YES,
          RESPONSE_KEYS_VALUES.some(
            (responseKey) => row[responseKey] === row.count
          )
            ? row.count
            : 1
        );
      } else if (!row[KEYS.RESPONDED]) {
        setAccum(
          accum,
          row,
          ATTENDEE_KEYS.ATTENDANCE,
          ATTENDEE_LIST_KEYS.INVITED,
          row.count
        );
      } else {
        setAccum(
          accum,
          row,
          ATTENDEE_KEYS.ATTENDANCE,
          ATTENDEE_LIST_KEYS.NO,
          row.count
        );
      }

      const eventKeys = getEvents(row.type).map(({ key }) => key);

      if (eventKeys.includes(EVENTS.WELCOME_DINNER.key)) {
        eventKeys.push(EVENTS.WELCOME_DRINKS.key);
      }

      if (eventKeys.includes(EVENTS.CEREMONY.key)) {
        eventKeys.push(EVENTS.PARTY.key);
      }

      RESPONSE_KEYS_VALUES.forEach((responseKey) => {
        const eventCount = row[responseKey];
        const invited = eventKeys.includes(responseKey);

        if (eventCount) {
          setAccum(accum, row, responseKey, ATTENDEE_LIST_KEYS.YES, eventCount);
        }

        if (row[KEYS.RESPONDED] && invited && eventCount !== row.count) {
          setAccum(
            accum,
            row,
            responseKey,
            ATTENDEE_LIST_KEYS.NO,
            row.count - eventCount
          );
        }

        if (!row[KEYS.RESPONDED] && invited) {
          setAccum(
            accum,
            row,
            responseKey,
            ATTENDEE_LIST_KEYS.INVITED,
            row.count
          );
        }
      });

      return accum;
    },
    {
      [ATTENDEE_KEYS.ATTENDANCE]: getInit(),
      [ATTENDEE_KEYS.RESPONSE_STATUS]: getInit(),
      [KEYS.FAMILY_PIZZA]: getInit(),
      [KEYS.FRIENDS_PIZZA]: getInit(),
      [KEYS.WELCOME_DINNER]: getInit(),
      [KEYS.WELCOME_DRINKS]: getInit(),
      [KEYS.CEREMONY]: getInit(),
      [KEYS.PARTY]: getInit(),
      [KEYS.BRUNCH]: getInit(),
    }
  );
