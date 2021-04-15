import React, { useState } from "react";
import PropTypes from "prop-types";
import { updateRsvp } from "utils/rsvp";
import { getEvents, INDEX_KEYS, KEYS, parseSubmit } from "../utils";
import Event from "../Event";
import {
  Attending,
  Button,
  Error,
  EventsContainer,
  NotAttending,
  SimpleContainer,
  Welcome,
} from "./styles";

const RsvpFormEvents = ({ rsvp, setErrorCode, setNextState }) => {
  const { count, id, first, partnerFirst, type, userKey, ...rest } = rsvp;
  const [error, setError] = useState("");
  const [response, setResponse] = useState(
    Object.values(KEYS).reduce((accum, key) => {
      if (typeof rest[key] === "number") {
        accum[key] = rest[key];
      } else {
        accum[key] = 0;
      }

      return accum;
    }, {})
  );
  const [simpleAction, setSimpleAction] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  const onUpdate = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (typeof simpleAction !== "boolean") {
      setError("That door isn't unlocked yet.");
      return;
    }

    setDisableButton(true);
    setError("");
    setErrorCode("");

    const parsedResponse = parseSubmit(response);

    if (
      simpleAction &&
      Object.values(parsedResponse).every((value) => value === 0)
    ) {
      setError("You didn't select any events you would be joining us.");
      setDisableButton(false);
      return;
    }

    const rsvpObj = await updateRsvp(id, parsedResponse);

    if (!rsvpObj) {
      setErrorCode("bear-3");
      setDisableButton(false);
      return;
    } else if (rsvpObj.errorCode) {
      setErrorCode(rsvpObj.errorCode);
      setDisableButton(false);
      return;
    } else if (rsvpObj.error) {
      setErrorCode("bear-4");
      setDisableButton(false);
      return;
    }

    setNextState(!simpleAction);
  };

  const userText =
    (userKey === INDEX_KEYS.PARTNER && ` and ${partnerFirst}`) || first;
  const otherText =
    (userKey === INDEX_KEYS.PARTNER && ` and ${first}`) ||
    (partnerFirst && ` and ${partnerFirst}`) ||
    "";

  const handleChange = (key, value) => {
    setResponse((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  return (
    <>
      <Welcome>
        Hey there,&nbsp;{userText}! We're super excited to see you
        {otherText}&nbsp;soon!
      </Welcome>
      {!simpleAction && (
        <>
          <SimpleContainer>
            <div>
              <NotAttending
                onClick={() => setSimpleAction(false)}
                selected={simpleAction === false}
              >
                Not Attending
              </NotAttending>
              <Attending
                onClick={() => setSimpleAction(true)}
                selected={simpleAction === true}
              >
                Attending
              </Attending>
            </div>
          </SimpleContainer>
          <Button onClick={disableButton ? undefined : onUpdate}>Submit</Button>
        </>
      )}
      {simpleAction && (
        <EventsContainer>
          {getEvents(type).map((event) => (
            <Event
              event={event}
              key={event.key}
              onChange={handleChange}
              allowed={count}
              response={response[event.key]}
            />
          ))}
          <Button onClick={disableButton ? undefined : onUpdate}>Submit</Button>
        </EventsContainer>
      )}
      {error && <Error>{error}</Error>}
    </>
  );
};

RsvpFormEvents.propTypes = {
  rsvp: PropTypes.object.isRequired,
  setErrorCode: PropTypes.func.isRequired,
  setNextState: PropTypes.func.isRequired,
};

export default RsvpFormEvents;
