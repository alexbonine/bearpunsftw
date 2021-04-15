import styled from "@emotion/styled";
import mq from "styles/mq";
import { STANDARD_INPUT_MARGIN } from "styles/constants";

export const Title = styled.h2`
  margin-bottom: ${STANDARD_INPUT_MARGIN};
  text-align: center;
`;

export const Text = styled.div`
  margin-top: ${STANDARD_INPUT_MARGIN};
  text-align: center;
`;

export const GifContainer = styled.div`
  max-width: 220px;
`;

export const Gif = styled.img`
  object-fit: contain;

  ${mq({
    // width: ["100%", "100%", "80%", "80%"],
    // maxHeight: ["100vh", "100vh", "635px", "540px"],
  })}
`;
