import React from "react";
import {
  Container,
  Line,
  LineEnd,
  LineInnerEndpoint,
  LineStart,
  InnerContainer,
  Timeline,
  TimelineRow,
  TimelineRowItem,
  TimelineRowItemContainer,
  TimelineRowNotch,
  TimelineRowNotchSmall,
  Title,
} from "./styles";

const Story = () => {
  return (
    <Container>
      <Title>Our Story</Title>
      <InnerContainer>
        <LineStart>
          <LineInnerEndpoint />
        </LineStart>
        <Line />
        <LineEnd>
          <LineInnerEndpoint />
        </LineEnd>
        <Timeline>
          <TimelineRow>
            <TimelineRowItemContainer>
              <TimelineRowItem>Sup</TimelineRowItem>
              <TimelineRowNotchSmall>+</TimelineRowNotchSmall>
            </TimelineRowItemContainer>
            <TimelineRowNotch>+</TimelineRowNotch>
            <TimelineRowItemContainer>
              <TimelineRowItem>Yo</TimelineRowItem>
            </TimelineRowItemContainer>
          </TimelineRow>
          <TimelineRow>
            <TimelineRowItemContainer>
              <TimelineRowItem>Sup</TimelineRowItem>
              <TimelineRowNotchSmall>+</TimelineRowNotchSmall>
            </TimelineRowItemContainer>
            <TimelineRowNotch>+</TimelineRowNotch>
            <TimelineRowItemContainer>
              <TimelineRowItem>Yo</TimelineRowItem>
            </TimelineRowItemContainer>
          </TimelineRow>
          <TimelineRow>
            <TimelineRowItemContainer>
              <TimelineRowItem>Sup</TimelineRowItem>
              <TimelineRowNotchSmall>+</TimelineRowNotchSmall>
            </TimelineRowItemContainer>
            <TimelineRowNotch>+</TimelineRowNotch>
            <TimelineRowItemContainer>
              <TimelineRowItem>Yo</TimelineRowItem>
            </TimelineRowItemContainer>
          </TimelineRow>
          <TimelineRow>
            <TimelineRowItemContainer>
              <TimelineRowItem>Sup</TimelineRowItem>
              <TimelineRowNotchSmall>+</TimelineRowNotchSmall>
            </TimelineRowItemContainer>
            <TimelineRowNotch>+</TimelineRowNotch>
            <TimelineRowItemContainer>
              <TimelineRowItem>Yo</TimelineRowItem>
            </TimelineRowItemContainer>
          </TimelineRow>
        </Timeline>
      </InnerContainer>
    </Container>
  );
};

export default Story;
