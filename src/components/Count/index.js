import React, { useEffect, useState } from "react";
import LoadingIndicator from "components/LoadingIndicator";
import { getRsvps } from "utils/rsvp";
import { KEYS, RESPONSE_KEYS_VALUES } from "utils/constants";
import {
  Attendee,
  AttendeesList,
  AttendeesTitle,
  Container,
  Counts,
  Error,
  Event,
  EventsContainer,
  Title,
  Total,
} from "./styles";

const getAttendee = ({ first, last, partnerFirst, partnerLast }, eventCount) =>
  `${first} ${last}${
    partnerFirst ? `/${partnerFirst} ${partnerLast}` : ""
  } - ${eventCount}`;

const parseRows = (rows) =>
  rows.reduce(
    (accum, row) => {
      if (row[KEYS.RESPONDED]) {
        accum.responded += 1;
        accum.attendees.responded.push(getAttendee(row, row.count));
      } else {
        accum.notResponded += 1;
        accum.attendees.notResponded.push(getAttendee(row, row.count));
      }

      if (row[KEYS.ATTENDING]) {
        accum.attending += RESPONSE_KEYS_VALUES.some(
          (responseKey) => row[responseKey] === row.count
        )
          ? row.count
          : 1;
        accum.attendees.attending.push(getAttendee(row, row.count));
      } else if (!row[KEYS.RESPONDED]) {
        accum.unknown += row.count;
        accum.attendees.unknown.push(getAttendee(row, row.count));
      } else {
        accum.notAttending += row.count;
        accum.attendees.notAttending.push(getAttendee(row, row.count));
      }

      RESPONSE_KEYS_VALUES.forEach((responseKey) => {
        const eventCount = row[responseKey];

        if (eventCount) {
          accum[responseKey] = eventCount;
          accum.attendees[responseKey].push(getAttendee(row, eventCount));
        }
      });

      return accum;
    },
    {
      responded: 0,
      notResponded: 0,
      attending: 0,
      notAttending: 0,
      unknown: 0,
      [KEYS.FAMILY_PIZZA]: 0,
      [KEYS.FRIENDS_PIZZA]: 0,
      [KEYS.WELCOME_DINNER]: 0,
      [KEYS.WELCOME_DRINKS]: 0,
      [KEYS.CEREMONY]: 0,
      [KEYS.PARTY]: 0,
      [KEYS.BRUNCH]: 0,
      attendees: {
        [KEYS.FAMILY_PIZZA]: [],
        [KEYS.FRIENDS_PIZZA]: [],
        [KEYS.WELCOME_DINNER]: [],
        [KEYS.WELCOME_DRINKS]: [],
        [KEYS.CEREMONY]: [],
        [KEYS.PARTY]: [],
        [KEYS.BRUNCH]: [],
        responded: [],
        notResponded: [],
        attending: [],
        notAttending: [],
        unknown: [],
      },
    }
  );

const Count = () => {
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState({});
  const [attendeesKey, setAttendeesKey] = useState("attending");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const pw = window.location.search.match(/pw=(\w*)/i)[1];

        const countsObj = await getRsvps(pw);

        if (!countsObj) {
          debugger;
          throw Error("Missing counts");
        }

        setCounts(parseRows(countsObj));
      } catch (e) {
        setError("Go away");
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  const setupSetAttendeesKey = (key) => () => setAttendeesKey(key);

  const setupSetAttendeesKeyPress = (key) => (event) => {
    if (event.key === "Enter") {
      setAttendeesKey(key);
    }
  };

  const {
    responded,
    notResponded,
    attending,
    notAttending,
    unknown,
    [KEYS.FAMILY_PIZZA]: familyPizza,
    [KEYS.FRIENDS_PIZZA]: friendsPizza,
    [KEYS.WELCOME_DINNER]: welcomeDinner,
    [KEYS.WELCOME_DRINKS]: welcomeDrinks,
    [KEYS.CEREMONY]: ceremony,
    [KEYS.PARTY]: party,
    [KEYS.BRUNCH]: brunch,
    attendees,
  } = counts;

  let attendeesTitle = attendeesKey.replace(/([A-Z])/g, " $1");
  attendeesTitle =
    attendeesTitle.charAt(0).toUpperCase() + attendeesTitle.slice(1);

  return (
    <Container>
      {loading && <LoadingIndicator />}
      {error && <Error>{error}</Error>}
      {attendees && (
        <Counts>
          <Title>RSVP Counts</Title>
          <Total>
            <span
              onClick={setupSetAttendeesKey("attending")}
              onKeyDown={setupSetAttendeesKeyPress("attending")}
              role="button"
              tabIndex={0}
            >
              Attending:&nbsp;
              {attending}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              onClick={setupSetAttendeesKey("notAttending")}
              onKeyDown={setupSetAttendeesKeyPress("notAttending")}
              role="button"
              tabIndex={0}
            >
              Not Attending:&nbsp;
              {notAttending}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              onClick={setupSetAttendeesKey("unknown")}
              onKeyDown={setupSetAttendeesKeyPress("unknown")}
              role="button"
              tabIndex={0}
            >
              Unknown:&nbsp;
              {unknown}
            </span>
          </Total>
          <Total>
            <span
              onClick={setupSetAttendeesKey("responded")}
              onKeyDown={setupSetAttendeesKeyPress("responded")}
              role="button"
              tabIndex={0}
            >
              Responded:&nbsp;
              {responded}
            </span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span
              onClick={setupSetAttendeesKey("notResponded")}
              onKeyDown={setupSetAttendeesKeyPress("notResponded")}
              role="button"
              tabIndex={0}
            >
              Not Responded:&nbsp;
              {notResponded}
            </span>
          </Total>
          <br />
          <EventsContainer>
            <Event
              onClick={setupSetAttendeesKey(KEYS.FAMILY_PIZZA)}
              onKeyDown={setupSetAttendeesKeyPress(KEYS.FAMILY_PIZZA)}
              role="button"
              tabIndex={0}
            >
              Family Pizza:&nbsp;{familyPizza}
            </Event>
            <Event
              onClick={setupSetAttendeesKey(KEYS.FRIENDS_PIZZA)}
              onKeyDown={setupSetAttendeesKeyPress(KEYS.FRIENDS_PIZZA)}
              role="button"
              tabIndex={0}
            >
              Friends Pizza:&nbsp;{friendsPizza}
            </Event>
            <Event
              onClick={setupSetAttendeesKey(KEYS.WELCOME_DINNER)}
              onKeyDown={setupSetAttendeesKeyPress(KEYS.WELCOME_DINNER)}
              role="button"
              tabIndex={0}
            >
              Welcome Dinner:&nbsp;{welcomeDinner}
            </Event>
            <Event
              onClick={setupSetAttendeesKey(KEYS.WELCOME_DRINKS)}
              onKeyDown={setupSetAttendeesKeyPress(KEYS.WELCOME_DRINKS)}
              role="button"
              tabIndex={0}
            >
              Welcome Drinks:&nbsp;{welcomeDrinks}
            </Event>
            <Event
              onClick={setupSetAttendeesKey(KEYS.CEREMONY)}
              onKeyDown={setupSetAttendeesKeyPress(KEYS.CEREMONY)}
              role="button"
              tabIndex={0}
            >
              Ceremony:&nbsp;{ceremony}
            </Event>
            <Event
              onClick={setupSetAttendeesKey(KEYS.PARTY)}
              onKeyDown={setupSetAttendeesKeyPress(KEYS.PARTY)}
              role="button"
              tabIndex={0}
            >
              Party:&nbsp;{party}
            </Event>
            <Event
              onClick={setupSetAttendeesKey(KEYS.BRUNCH)}
              onKeyDown={setupSetAttendeesKeyPress(KEYS.BRUNCH)}
              role="button"
              tabIndex={0}
            >
              Brunch:&nbsp;{brunch}
            </Event>
          </EventsContainer>
          <AttendeesTitle>Attendees: {attendeesTitle}</AttendeesTitle>
          <AttendeesList>
            {(attendees[attendeesKey] || []).map((entry) => (
              <Attendee key={entry}>{entry}</Attendee>
            ))}
          </AttendeesList>
        </Counts>
      )}
    </Container>
  );
};

export default Count;
