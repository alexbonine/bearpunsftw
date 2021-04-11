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
            Already know you'll be joining us or unable to make the trip? Send
            us a message at&nbsp;
            <ATag
              target="_blank"
              rel="noreferrer"
              href="mailto:alexandshawna91821@gmail.com"
            >
              alexandshawna91821@gmail.com
            </ATag>
            !
          </Text>
          <AppleIcon />
          <Text>Official RSVP details will be provided in the invitation.</Text>
        </WordsContainer>
      </InnerContainer>
      <IconCopyright />
    </Container>
  );
};

export default Rsvp;
