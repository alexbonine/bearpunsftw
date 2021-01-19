import React from "react";
import TurksInn from "images/turks-inn.jpg";
import {
  Container,
  EventContainer,
  EventDate,
  EventLocation,
  EventLocationTag,
  EventTime,
  EventTitle,
  Image,
  ImageContainerLarge,
  ImageContainerSmall,
  TextContainer,
  Title,
} from "./styles";

const events = [
  {
    day: "Friday 17th",
    key: "coney",
    location: "Luna Park",
    locationLink: "https://lunaparknyc.com/",
    title: "Coney Island Adventure",
    time: "12pm-4pm",
  },
  {
    key: "dinner",
    location: "",
    locationLink: "",
    title: "Welcome Dinner (FAMILY ONLY)",
    time: "6pm-8pm",
  },
  {
    key: "cocktails",
    location: "TBD",
    locationLink: "",
    title: "Welcome Cocktails",
    time: "8pm-10pm",
  },
  {
    day: "Saturday 18th",
    key: "ceremony",
    location: "",
    locationLink: "",
    title: "Ceremony (FAMILY ONLY)",
    time: "5pm-6pm",
  },
  {
    key: "party",
    location: "Turk's Inn",
    locationLink: "http://turksnyc.com/",
    title: "Party Time",
    time: "6pm-12am",
  },
  {
    day: "Sunday 19th",
    key: "bites",
    location: "TBD",
    locationLink: "",
    title: "Farewell Bites",
    time: "10am-12pm",
  },
];

const mapEvents = () =>
  events.map(({ day = "", key, location, locationLink, time, title }) => (
    <EventContainer first={day.length > 0} key={key}>
      {day && <EventDate>{day}</EventDate>}
      <EventTitle>{title}</EventTitle>
      {locationLink && (
        <EventLocation>
          at&nbsp;
          <EventLocationTag href={locationLink} target="_blank">
            {location}
          </EventLocationTag>
        </EventLocation>
      )}
      {!locationLink && location && (
        <EventLocation>at&nbsp;{location}</EventLocation>
      )}
      <EventTime>{time}</EventTime>
    </EventContainer>
  ));

const Schedule = () => {
  return (
    <Container>
      <TextContainer>
        <div>
          <Title>The Weekend</Title>
        </div>
        {mapEvents()}
      </TextContainer>
      <ImageContainerSmall />
      <ImageContainerLarge>
        <Image src={TurksInn} alt="Turks Inn" />
      </ImageContainerLarge>
    </Container>
  );
};

export default Schedule;
