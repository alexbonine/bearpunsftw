import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { updateRsvp } from "utils/rsvp";
import { INDEX_KEYS, KEYS_GET, RESPONSE_KEYS } from "utils/constants";
import { getEvents, parseResponse } from "utils/events";
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

const RsvpFormEvents = ({
  rsvp,
  setErrorCode,
  setLoading,
  setNextState,
  setRsvp,
  titleRef,
}) => {
  const { count, id, first, partnerFirst, type, userKey, ...rest } = rsvp;
  const [error, setError] = useState("");
  const [response, setResponse] = useState(
    Object.values(RESPONSE_KEYS).reduce((accum, key) => {
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

  useEffect(() => {
    if (simpleAction && titleRef.current) {
      titleRef.current.scrollIntoView(true);
    }
  }, [simpleAction, titleRef]);

  const onUpdate = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (typeof simpleAction !== "boolean") {
      setError("That door isn't unlocked yet.");
      return;
    }

    setLoading(true);
    setDisableButton(true);
    setError("");
    setErrorCode("");

    const parsedResponse = parseResponse(response, !simpleAction);

    if (
      simpleAction &&
      Object.values(parsedResponse).every((value) => value === 0)
    ) {
      setError("You didn't select any events you would be joining us.");
      setDisableButton(false);
      setLoading(false);
      return;
    }

    const rsvpObj = await updateRsvp(id, {
      [KEYS_GET.ATTENDING]: simpleAction,
      [KEYS_GET.BY_USER]: userKey === INDEX_KEYS.GUEST ? first : partnerFirst,
      [KEYS_GET.RESPONSE]: parsedResponse,
    });

    if (!rsvpObj) {
      setErrorCode("bear-3");
      setDisableButton(false);
      setLoading(false);
      return;
    } else if (rsvpObj.errorCode) {
      setErrorCode(rsvpObj.errorCode);
      setDisableButton(false);
      setLoading(false);
      return;
    } else if (rsvpObj.error) {
      setErrorCode("bear-4");
      setDisableButton(false);
      setLoading(false);
      return;
    }

    setRsvp(rsvpObj);
    setNextState(!simpleAction);
  };

  const userText = (userKey === INDEX_KEYS.PARTNER && partnerFirst) || first;
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
  setLoading: PropTypes.func.isRequired,
  setNextState: PropTypes.func.isRequired,
  setRsvp: PropTypes.func.isRequired,
  titleRef: PropTypes.shape({ current: PropTypes.object }),
};

export default RsvpFormEvents;
