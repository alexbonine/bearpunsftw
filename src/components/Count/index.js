import React, { useEffect, useState } from "react";
import LoadingIndicator from "components/LoadingIndicator";
import { getRsvps } from "utils/rsvp";
import { ATTENDEE_KEYS, ATTENDEE_LIST_KEYS, KEYS } from "utils/constants";
import { formatCounts, parseRows } from "./helpers";
import CountEvent from "components/CountEvent";
import colors from "styles/colors";
import {
  Attendee,
  AttendeesList,
  AttendeesTitle,
  Container,
  Counts,
  Error,
  EventsContainer,
  Title,
  TotalBox,
  TotalColumn,
  TotalContainer,
  TotalItem,
} from "./styles";

const Count = () => {
  const [loading, setLoading] = useState(false);
  const [counts, setCounts] = useState({});
  const [attendeesKey, setAttendeesKey] = useState(ATTENDEE_KEYS.ATTENDANCE);
  const [attendeesListKey, setAttendeesListKey] = useState(
    ATTENDEE_LIST_KEYS.YES
  );
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

  const {
    [ATTENDEE_KEYS.ATTENDANCE]: attendance,
    [ATTENDEE_KEYS.RESPONSE_STATUS]: status,
    [KEYS.FAMILY_PIZZA]: familyPizza,
    [KEYS.FRIENDS_PIZZA]: friendsPizza,
    [KEYS.WELCOME_DINNER]: welcomeDinner,
    [KEYS.WELCOME_DRINKS]: welcomeDrinks,
    [KEYS.CEREMONY]: ceremony,
    [KEYS.PARTY]: party,
    [KEYS.BRUNCH]: brunch,
    totalInvited,
    totalResponses,
  } = counts;

  let attendeesTitle = attendeesListKey.replace(/([A-Z])/g, " $1");
  attendeesTitle =
    attendeesTitle.charAt(0).toUpperCase() + attendeesTitle.slice(1);

  const onClick = (key, listKey) => {
    setAttendeesKey(key);
    setAttendeesListKey(listKey);
  };

  const setupOnKeyPress = (key, listKey) => (event) => {
    if (event.key === "Enter") {
      onClick(key, listKey);
    }
  };

  const setupOnClick = (key, listKey) => () => {
    onClick(key, listKey);
  };

  return (
    <Container>
      {loading && <LoadingIndicator />}
      {error && <Error>{error}</Error>}
      {attendance && (
        <Counts>
          <Title>RSVP Counts</Title>
          <TotalContainer>
            <TotalColumn>
              <TotalBox>
                <TotalItem
                  color={colors.green}
                  onClick={setupOnClick(
                    ATTENDEE_KEYS.ATTENDANCE,
                    ATTENDEE_LIST_KEYS.YES
                  )}
                  onKeyDown={setupOnKeyPress(
                    ATTENDEE_KEYS.ATTENDANCE,
                    ATTENDEE_LIST_KEYS.YES
                  )}
                  role="button"
                  tabIndex={0}
                >
                  Yes:&nbsp;
                  {formatCounts(
                    attendance.counts.yes,
                    totalInvited,
                    attendance.counts.yes + attendance.counts.no
                  )}
                </TotalItem>
                <TotalItem
                  color={colors.red}
                  onClick={setupOnClick(
                    ATTENDEE_KEYS.ATTENDANCE,
                    ATTENDEE_LIST_KEYS.NO
                  )}
                  onKeyDown={setupOnKeyPress(
                    ATTENDEE_KEYS.ATTENDANCE,
                    ATTENDEE_LIST_KEYS.NO
                  )}
                  role="button"
                  tabIndex={0}
                >
                  No:&nbsp;
                  {formatCounts(attendance.counts.no, totalInvited)}
                </TotalItem>
                <TotalItem
                  color={colors.yellow}
                  onClick={setupOnClick(
                    ATTENDEE_KEYS.ATTENDANCE,
                    ATTENDEE_LIST_KEYS.INVITED
                  )}
                  onKeyDown={setupOnKeyPress(
                    ATTENDEE_KEYS.ATTENDANCE,
                    ATTENDEE_LIST_KEYS.INVITED
                  )}
                  role="button"
                  tabIndex={0}
                >
                  ??:&nbsp;
                  {formatCounts(attendance.counts.invited, totalInvited)}
                </TotalItem>
              </TotalBox>
            </TotalColumn>
            <TotalColumn>
              <TotalBox>
                <TotalItem
                  color={colors.green}
                  onClick={setupOnClick(
                    ATTENDEE_KEYS.RESPONSE_STATUS,
                    ATTENDEE_LIST_KEYS.YES
                  )}
                  onKeyDown={setupOnKeyPress(
                    ATTENDEE_KEYS.RESPONSE_STATUS,
                    ATTENDEE_LIST_KEYS.YES
                  )}
                  role="button"
                  tabIndex={0}
                >
                  RSVP'd:&nbsp;
                  {formatCounts(status.counts.yes, totalResponses)}
                </TotalItem>
                <TotalItem
                  color={colors.red}
                  onClick={setupOnClick(
                    ATTENDEE_KEYS.RESPONSE_STATUS,
                    ATTENDEE_LIST_KEYS.NO
                  )}
                  onKeyDown={setupOnKeyPress(
                    ATTENDEE_KEYS.RESPONSE_STATUS,
                    ATTENDEE_LIST_KEYS.NO
                  )}
                  role="button"
                  tabIndex={0}
                >
                  Viewed:&nbsp;
                  {formatCounts(status.counts.no, totalResponses)}
                </TotalItem>
                <TotalItem
                  color={colors.yellow}
                  onClick={setupOnClick(
                    ATTENDEE_KEYS.RESPONSE_STATUS,
                    ATTENDEE_LIST_KEYS.INVITED
                  )}
                  onKeyDown={setupOnKeyPress(
                    ATTENDEE_KEYS.RESPONSE_STATUS,
                    ATTENDEE_LIST_KEYS.INVITED
                  )}
                  role="button"
                  tabIndex={0}
                >
                  Waiting:&nbsp;
                  {formatCounts(status.counts.invited, totalResponses)}
                </TotalItem>
              </TotalBox>
            </TotalColumn>
          </TotalContainer>
          <br />
          <EventsContainer>
            <CountEvent
              counts={familyPizza.counts}
              countKey={KEYS.FAMILY_PIZZA}
              onClick={onClick}
            />
            <CountEvent
              counts={friendsPizza.counts}
              countKey={KEYS.FRIENDS_PIZZA}
              onClick={onClick}
            />
            <CountEvent
              counts={welcomeDinner.counts}
              countKey={KEYS.WELCOME_DINNER}
              onClick={onClick}
            />
            <CountEvent
              counts={welcomeDrinks.counts}
              countKey={KEYS.WELCOME_DRINKS}
              onClick={onClick}
            />
            <CountEvent
              counts={ceremony.counts}
              countKey={KEYS.CEREMONY}
              onClick={onClick}
            />
            <CountEvent
              counts={party.counts}
              countKey={KEYS.PARTY}
              onClick={onClick}
            />
            <CountEvent
              counts={brunch.counts}
              countKey={KEYS.BRUNCH}
              onClick={onClick}
            />
          </EventsContainer>
          <AttendeesTitle>Attendees: {attendeesTitle}</AttendeesTitle>
          <AttendeesList>
            {counts[attendeesKey].lists[attendeesListKey].map((entry) => (
              <Attendee key={entry}>{entry}</Attendee>
            ))}
          </AttendeesList>
        </Counts>
      )}
    </Container>
  );
};

export default Count;
