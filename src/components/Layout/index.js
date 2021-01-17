import React from "react";
import PropTypes from "prop-types";
import Hero from "components/Hero";
import { Content } from "./styles";

const Layout = ({ children, header, hero }) => {
  return (
    <div>
      <Hero>{hero}</Hero>
      <Content>
        {header}
        <main>{children}</main>
      </Content>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  header: PropTypes.node.isRequired,
  hero: PropTypes.node.isRequired,
};

export default Layout;
