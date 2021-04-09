import React from "react";
import Homepage from "components/Homepage";
import Article from "components/Article";
import Header from "components/Header";
import Welcome from "components/Welcome";
import Story from "components/Story";
import Schedule from "components/Schedule";
import Accommodations from "components/Accommodations";
import ThingsToDo from "components/ThingsToDo";
import Rsvp from "components/Rsvp";
import CopyRight from "components/Copyright";

const IndexPage = () => {
  return (
    <Homepage header={<Header />} hero={<Welcome />}>
      <Article id="ourstory">
        <Story />
      </Article>
      <Article id="schedule">
        <Schedule />
      </Article>
      <Article id="accommodations">
        <Accommodations />
      </Article>
      <Article id="thingstodo">
        <ThingsToDo />
      </Article>
      <Article id="rsvp">
        <Rsvp />
      </Article>
      <CopyRight />
    </Homepage>
  );
};

export default IndexPage;
