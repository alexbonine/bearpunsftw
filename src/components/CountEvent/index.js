import React from "react";
import PropTypes from "prop-types";
import { ATTENDEE_LIST_KEYS } from "utils/constants";
import colors from "styles/colors";
import { Event, EventItem, EventItems } from "./styles";

const CountEvent = ({ countKey, counts, onClick }) => {
  const setupOnKeyPress = (key, listKey) => (event) => {
    if (event.key === "Enter") {
      onClick(key, listKey);
    }
  };

  const setupOnClick = (key, listKey) => () => {
    onClick(key, listKey);
  };

  let title = countKey.replace(/([A-Z])/g, " $1");
  title = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <Event>
      <EventItem
        onClick={setupOnClick(countKey, ATTENDEE_LIST_KEYS.YES)}
        onKeyDown={setupOnKeyPress(countKey, ATTENDEE_LIST_KEYS.YES)}
        role="button"
        tabIndex={0}
      >
        {title}:
      </EventItem>
      <EventItems>
        <EventItem
          color={colors.green}
          onClick={setupOnClick(countKey, ATTENDEE_LIST_KEYS.YES)}
          onKeyDown={setupOnKeyPress(countKey, ATTENDEE_LIST_KEYS.YES)}
          role="button"
          tabIndex={0}
        >
          {counts.yes} Yes
        </EventItem>
        <EventItem
          color={colors.red}
          onClick={setupOnClick(countKey, ATTENDEE_LIST_KEYS.NO)}
          onKeyDown={setupOnKeyPress(countKey, ATTENDEE_LIST_KEYS.NO)}
          role="button"
          tabIndex={0}
        >
          {counts.no} No
        </EventItem>
        <EventItem
          color={colors.yellow}
          onClick={setupOnClick(countKey, ATTENDEE_LIST_KEYS.INVITED)}
          onKeyDown={setupOnKeyPress(countKey, ATTENDEE_LIST_KEYS.INVITED)}
          role="button"
          tabIndex={0}
        >
          {counts.invited} ??
        </EventItem>
      </EventItems>
    </Event>
  );
};

CountEvent.propTypes = {
  countKey: PropTypes.string.isRequired,
  counts: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CountEvent;
