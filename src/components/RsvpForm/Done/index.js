import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ShawnaDancing from "images/shawna-dancing.gif";
import SadPanda from "images/sad-panda.gif";
import { RESPONSE_KEYS_VALUES } from "utils/constants";
import { Gif, GifContainer, Text, Title } from "./styles";

const RsvpFormDone = ({ notAttending, rsvp, titleRef }) => {
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView(true);
    }
  }, [titleRef]);

  const { byUser, count, email, partnerEmail, partnerFirst } = rsvp;
  const emails = [];

  if (count <= 1) {
    emails.push(email);
  } else if (
    RESPONSE_KEYS_VALUES.some((responseKey) => rsvp[responseKey] === count)
  ) {
    emails.push(email);
    emails.push(partnerEmail);
  } else {
    emails.push((byUser === partnerFirst && partnerEmail) || email);
  }

  if (notAttending) {
    return (
      <>
        <Title>We're sorry we won't get to celebrate with you!</Title>
        <GifContainer>
          <Gif src={SadPanda}></Gif>
        </GifContainer>
        <Text>Hopefully we'll get to see each other real soon anyway.</Text>
      </>
    );
  }

  return (
    <>
      <Title>We're so excited we get to celebrate with you!</Title>
      <GifContainer>
        <Gif src={ShawnaDancing}></Gif>
      </GifContainer>
      <Text>
        We have sent a copy of your response to {emails.join(" & ")} (might have
        gone to Spam). You can return to the RSVP page to update your response
        until July 18th. See you soon!
      </Text>
    </>
  );
};

RsvpFormDone.propTypes = {
  notAttending: PropTypes.bool.isRequired,
  rsvp: PropTypes.object.isRequired,
  titleRef: PropTypes.shape({ current: PropTypes.object }),
};

export default RsvpFormDone;
