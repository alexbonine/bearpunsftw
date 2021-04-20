import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ShawnaDancing from "images/shawna-dancing.gif";
import SadPanda from "images/sad-panda.gif";
import { Gif, GifContainer, Text, Title } from "./styles";

const RsvpFormDone = ({ notAttending, titleRef }) => {
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView(true);
    }
  }, [titleRef]);

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
        You can return to the RSVP page to update your response until July 18th.
        See you soon!
      </Text>
    </>
  );
};

RsvpFormDone.propTypes = {
  notAttending: PropTypes.bool.isRequired,
  titleRef: PropTypes.shape({ current: PropTypes.object }),
};

export default RsvpFormDone;
