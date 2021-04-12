import styled from "@emotion/styled";
import { HEADER_HEIGHT, STANDARD_INPUT_MARGIN } from "styles/constants";
import colors from "styles/colors";
import mq from "styles/mq";

export const Container = styled.div`
  display: flex;

  ${mq({
    flexDirection: ["column", "column", "row", "row"],
    height: [
      "",
      "",
      `calc(100vh - ${HEADER_HEIGHT})`,
      `calc(100vh - ${HEADER_HEIGHT})`,
    ],
  })}
`;

export const ImageContainer = styled.div`
  max-width: 50%;

  ${mq({
    marginLeft: ["0", "0", "50px", "50px"],
  })}
`;

export const Image = styled.img`
  height: calc(100vh - ${HEADER_HEIGHT});
  object-fit: contain;

  ${mq({
    // width: ["100%", "100%", "80%", "80%"],
    // maxHeight: ["100vh", "100vh", "635px", "540px"],
  })}
`;

export const FormContainer = styled.div`
  margin: 60px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq({
    flex: [undefined, undefined, "1", "1"],
  })}
`;

export const FormTitle = styled.h1`
  margin-bottom: ${STANDARD_INPUT_MARGIN};
`;

export const Form = styled("div", {
  shouldForwardProp: (prop) => !["large"].includes(prop),
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${({ large }) => (large ? "80%" : "60%")};
`;

export const Error = styled.div`
  color: ${colors.red};
  text-align: center;

  margin-bottom: ${STANDARD_INPUT_MARGIN};
`;

export const ErrorEmail = styled.div`
  text-align: center;
`;

export const ATag = styled.a`
  color: ${colors.red};
`;
