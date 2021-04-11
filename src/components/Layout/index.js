import React from "react";
import PropTypes from "prop-types";
import Header from "components/Header";
import { Parent } from "./styles";

const Layout = ({ children, header, hero }) => {
  return (
    <Parent>
      <Header />
      <main>{children}</main>
    </Parent>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Layout;
