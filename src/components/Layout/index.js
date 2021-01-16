import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styles";

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

export default Layout;
