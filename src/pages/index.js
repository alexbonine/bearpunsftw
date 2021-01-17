import React from "react";
import Layout from "components/Layout";
import Article from "components/Article";
import Header from "components/Header";
import Welcome from "components/Welcome";
import Story from "components/Story";
import Schedule from "components/Schedule";
import Accomodations from "components/Accomodations";
import ThingsToDo from "components/ThingsToDo";
import Rsvp from "components/Rsvp";

import "styles/styles.css";

const IndexPage = () => {
  return (
    <Layout header={<Header />} hero={<Welcome />}>
      <Article id="ourstory">
        <Story />
      </Article>
      <Article id="schedule">
        <Schedule />
      </Article>
      <Article id="accomodations">
        <Accomodations />
      </Article>
      <Article id="thingstodo">
        <ThingsToDo />
      </Article>
      <Article id="rsvp">
        <Rsvp />
      </Article>
    </Layout>
  );
};

export default IndexPage;
