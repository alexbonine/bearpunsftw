import React from "react";
import PropTypes from "prop-types";

const Article = ({ children, className, id }) => {
  return (
    <article id={id} className={className}>
      {children}
    </article>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
};

export default Article;
