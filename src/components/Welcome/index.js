import React, { useState } from "react";
import useInterval from "hooks/useInterval";
import NycSkyline from "images/nyc-skyline.png";
import {
  Alex,
  Container,
  Countdown,
  Image,
  Grid,
  Plus,
  Shawna,
  Skyline,
  TextContainer,
  TextOverlayContainer,
} from "./styles";

const INTERVAL = 1000;
const DAY = 86400; // 60 * 60 * 24
const HOUR = 3600; // 60 * 60
const MINUTE = 60; // 60

const calculate = () => {
  const weddingDatetime = new Date("2021-09-18T18:00:00");
  const today = new Date();
  const difference = (weddingDatetime - today) / 1000;

  return {
    days: Math.floor(difference / DAY),
    hours: Math.floor((difference % DAY) / HOUR),
    minutes: Math.floor((difference % HOUR) / MINUTE),
    seconds: Math.floor(difference % MINUTE) - 1,
  };
};

const update = (date) => {
  const updated = {
    ...date,
    seconds: date.seconds - 1,
  };

  if (updated.seconds < 0) {
    updated.seconds = 59;
    updated.minutes -= 1;
  }

  if (updated.minutes < 0) {
    updated.minutes = 59;
    updated.hours -= 1;
  }

  if (updated.hours < 0) {
    updated.hours = 23;
    updated.days -= 1;
  }

  return updated;
};

const str = ({ days, hours, minutes, seconds }) =>
  `${days} days ${hours}:${minutes}:${seconds}`;

const Welcome = () => {
  const [countdown, setCountdown] = useState(calculate());

  useInterval(() => {
    setCountdown(update(countdown));
  }, INTERVAL);

  return (
    <Container>
      <Grid>
        <Image>
          <TextOverlayContainer>
            <Shawna>Shawna</Shawna>
            <Plus>+</Plus>
            <Alex>Alex</Alex>
          </TextOverlayContainer>
        </Image>
        <TextContainer>
          <h3>September 18, 2021</h3>
          <Countdown>{str(countdown)}</Countdown>
          <h3>New York, NY</h3>
          <Skyline src={NycSkyline} />
        </TextContainer>
      </Grid>
    </Container>
  );
};

export default Welcome;
