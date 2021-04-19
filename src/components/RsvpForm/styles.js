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

export const ImageContainer = styled("div")(
  mq({
    maxWidth: ["100%", "100%", "50%", "50%"],
    marginLeft: ["0", "0", "50px", "50px"],
  })
);

export const Image = styled.img`
  height: calc(100vh - ${HEADER_HEIGHT});
  object-fit: contain;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq({
    flex: [undefined, undefined, "1", "1"],
    margin: ["0 0 100px 0", "0 0 100px 0", "60px 0", "60px 0"],
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
  width: ${({ large }) => (large ? "100%" : "60%")};
  min-height: 0;
`;

export const ErrorContainer = styled.div`
  margin-top: ${STANDARD_INPUT_MARGIN};
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
