import React, { useRef } from "react";
import { Container, ATag } from "./styles";

const Copyright = () => {
  const { current: year } = useRef(new Date().getFullYear());

  return (
    <Container>
      &#169; {year}{" "}
      <ATag
        target="_blank"
        rel="noreferrer"
        href="https://github.com/alexbonine"
      >
        Lemur Dev
      </ATag>
    </Container>
  );
};

export default Copyright;
