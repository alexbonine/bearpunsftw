import React from "react";
import TurksInn from "images/turks-inn.jpg";
import {
  Container,
  Grid,
  EventAttire,
  EventContainer,
  EventDate,
  EventLocation,
  EventLocationTag,
  EventTime,
  EventTitle,
  Image,
  NoChildren,
  TextContainer,
  Title,
} from "./styles";

const events = [
  {
    attire: "New York-night-out attire",
    day: "Friday 17th",
    key: "dinner",
    location: "Royale",
    locationLink: "https://www.royalebarnyc.com/",
    title: "Welcome Dinner (FAMILY ONLY)",
    time: "6pm-8pm",
  },
  {
    key: "cocktails",
    location: "Royale",
    locationLink: "https://www.royalebarnyc.com/",
    title: "Welcome Cocktails",
    time: "8pm-10pm",
  },
  {
    attire: "Cocktail attire",
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
    attire: "Outside attire",
    day: "Sunday 19th",
    key: "bites",
    location:
      "Stuyvesant Square Park (West of 2nd Ave), 9 Rutherford Pl, New York, NY 10003",
    locationLink: "",
    title: "Farewell Bites (NEW LOCATION)",
    time: "11am-1pm",
  },
];

const mapEvents = () =>
  events.map(
    ({ attire, day = "", key, location, locationLink, time, title }) => (
      <EventContainer first={day.length > 0} key={key}>
        {day && <EventDate>{day}</EventDate>}
        {attire && <EventAttire>{attire}</EventAttire>}
        <EventTitle>{title}</EventTitle>
        {locationLink && (
          <EventLocation>
            at&nbsp;
            <EventLocationTag
              href={locationLink}
              target="_blank"
              rel="noreferrer"
            >
              {location}
            </EventLocationTag>
          </EventLocation>
        )}
        {!locationLink && location && (
          <EventLocation>at&nbsp;{location}</EventLocation>
        )}
        <EventTime>{time}</EventTime>
      </EventContainer>
    )
  );

const Schedule = () => {
  return (
    <Container>
      <Grid>
        <TextContainer>
          <div>
            <Title>The Weekend</Title>
          </div>
          {mapEvents()}
          <NoChildren>* All events 21 and over *</NoChildren>
        </TextContainer>
        <Image src={TurksInn} alt="Turks Inn" />
      </Grid>
    </Container>
  );
};

export default Schedule;
