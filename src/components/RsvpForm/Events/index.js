import React, { useState } from "react";
import PropTypes from "prop-types";
import { updateRsvp } from "utils/rsvp";
import Button from "components/Button";
import { getEvents, INDEX_KEYS } from "../utils";
import Event from "../Event";
import { Error } from "../styles";
import { Welcome } from "./styles";

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
  const [error, setError] = useState("");
  const [response, setResponse] = useState(previousResponse || {});

  const onUpdate = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    setError("");
    setErrorCode("");

    await updateRsvp();

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
      {getEvents(type).map((event) => (
        <Event
          event={event}
          key={event.key}
          onChange={handleChange}
          allowed={count}
          response={response[event.key]}
        />
      ))}
      <Button onClick={onUpdate}>Submit</Button>
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
