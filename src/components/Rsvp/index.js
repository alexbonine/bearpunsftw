import React from "react";
import NycStoop from "images/nyc-stoop.jpg";
import IconCopyright from "components/IconCopyright";
import {
  AppleIcon,
  ATag,
  Container,
  Image,
  InnerContainer,
  Text,
  WordsContainer,
} from "./styles";

const Rsvp = () => {
  return (
    <Container>
      <InnerContainer>
        <Image src={NycStoop} />
        <WordsContainer>
          <h1>RSVP</h1>
          <Text>
            Our invitations aren't out yet but our RSVP is in open beta!
          </Text>
          <Text>
            Click below to let us know if you're going to be celebrating with us
            in September.
          </Text>
          <ATag to="/rsvp">RSVP</ATag>
          <AppleIcon />
        </WordsContainer>
      </InnerContainer>
      <IconCopyright />
    </Container>
  );
};

export default Rsvp;
