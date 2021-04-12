import React from "react";
import PropTypes from "prop-types";
import {
  Date,
  Event as EventBase,
  Info,
  Location,
  Minus,
  Plus,
  PlusMinusContainer,
  Time,
  Title,
  ToFollow,
} from "./styles";

const Event = ({ allowed, event, onChange, response }) => {
  const { date, key, location, time, title, toFollow } = event;

  const setupOnClick = (isIncrement) => (e) => {
    e.preventDefault();
    e.stopPropagation();

    const newResponse = isIncrement ? response + 1 : response - 1;

    if (newResponse <= allowed && newResponse >= 0) {
      onChange(key, newResponse);
    }
  };

  return (
    <EventBase>
      <PlusMinusContainer>
        <Plus onClick={response !== allowed && setupOnClick(true)} />
        {response}
        <Minus onClick={response !== 0 && setupOnClick(false)} />
      </PlusMinusContainer>
      <Info>
        <Date>{date}</Date>
        <Title>{title}</Title>
        <Location>{location}</Location>
        <Time>{time}</Time>
        <ToFollow>{toFollow}</ToFollow>
      </Info>
    </EventBase>
  );
};

Event.propTypes = {
  allowed: PropTypes.number.isRequired,
  event: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  response: PropTypes.number,
};

Event.defaultProps = {
  response: 0,
};

export default Event;
