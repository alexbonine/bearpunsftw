import React, { useState } from "react";
import PropTypes from "prop-types";
import { updateRsvp } from "utils/rsvp";
import { getEvents, INDEX_KEYS, KEYS, parseSubmit } from "../utils";
import Event from "../Event";
// import { Error } from "../styles";
import {
  Attending,
  Button,
  EventsContainer,
  NotAttending,
  SimpleContainer,
  Welcome,
} from "./styles";

const RsvpFormEvents = ({ rsvp, setErrorCode, setNextState }) => {
  const {
    count,
    id,
    first,
    partnerFirst,
    response: previousResponse,
    type,
    userKey,
  } = rsvp;
  // const [error, setError] = useState("");
  const [response, setResponse] = useState(
    previousResponse ||
      Object.values(KEYS).reduce((accum, key) => {
        accum[key] = 0;

        return accum;
      }, {})
  );
  const [simpleAction, setSimpleAction] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  const onUpdate = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    setDisableButton(true);
    // setError("");
    setErrorCode("");
    console.log(parseSubmit(response));
    const rsvpObj = await updateRsvp(parseSubmit(response));

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

    // setNextState();
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
      {/* {error && <Error>{error}</Error>} */}
    </>
  );
};

RsvpFormEvents.propTypes = {
  rsvp: PropTypes.object.isRequired,
  setErrorCode: PropTypes.func.isRequired,
  setNextState: PropTypes.func.isRequired,
};

export default RsvpFormEvents;
