import React from "react";
import PropTypes from "prop-types";
import Hero from "components/Hero";
import { Content, Parent } from "./styles";

const Homepage = ({ children, header, hero }) => {
  return (
    <Parent>
      <Hero>{hero}</Hero>
      <Content>
        {header}
        <main>{children}</main>
      </Content>
    </Parent>
  );
};

Homepage.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  header: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
};

export default Homepage;
