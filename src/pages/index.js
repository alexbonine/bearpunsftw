import React from "react";
import { Helmet } from "react-helmet";
import Layout from "components/Layout";
import Article from "components/Article";
import Header from "components/Header";
import Welcome from "components/Welcome";
import Story from "components/Story";
import Schedule from "components/Schedule";
import Accomodations from "components/Accomodations";
import ThingsToDo from "components/ThingsToDo";
import Rsvp from "components/Rsvp";
import CopyRight from "components/Copyright";

import "styles/styles.css";

const IndexPage = () => {
  return (
    <Layout header={<Header />} hero={<Welcome />}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bear Puns FTW</title>
        <meta
          name="description"
          content="Wedding Website of Shawna Carney and Alex Bonine"
        />
        <meta name="author" content="Alex Bonine (lemurdev@gmail.com)" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bearpunsftw.com/" />
      </Helmet>
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
      <CopyRight />
    </Layout>
  );
};

export default IndexPage;
