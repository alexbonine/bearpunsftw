import React from "react";
import PropTypes from "prop-types";
import { Article } from "./styles";

const Hero = ({ children }) => {
  return <Article id="">{children}</Article>;
};

Hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Hero;
