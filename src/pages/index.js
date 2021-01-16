import React from "react";
import Layout from "components/Layout";
import Header from "components/Header";
import Welcome from "components/Welcome";
import Story from "components/Story";
import Events from "components/Events";
import Accomodations from "components/Accomodations";
import ThingsToDo from "components/ThingsToDo";
import Rsvp from "components/Rsvp";

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Welcome />
      <Story />
      <Events />
      <Accomodations />
      <ThingsToDo />
      <Rsvp />
    </Layout>
  );
};

export default IndexPage;
