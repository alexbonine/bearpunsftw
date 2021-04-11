import styled from "@emotion/styled";
import { HEADER_HEIGHT } from "styles/constants";
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
  margin: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq({
    flex: [undefined, undefined, "1", "1"],
  })}
`;

const STANDARD_MARGIN = "20px";

export const FormTitle = styled.h1`
  margin-bottom: ${STANDARD_MARGIN};
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60%;
`;

export const SubFormTitle = styled.div`
  margin-bottom: ${STANDARD_MARGIN};
`;

export const Input = styled.input`
  display: block;
  margin-bottom: ${STANDARD_MARGIN};
  padding: 4px 10px;
  border: 1px solid ${colors.grayLightest};
  outline: none;
  border-radius: 4px;

  &:hover,
  &:focus {
    border-color: ${colors.blueLight};
  }

  &::placeholder {
    color: ${colors.gray};
    font-style: italic;
  }
`;

export const Submit = styled.button`
  margin-top: ${STANDARD_MARGIN};
  margin-bottom: ${STANDARD_MARGIN};
  padding: 5px 20px;
  color: ${colors.white};
  background-color: ${colors.blue};
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 16px;
  min-width: 80px;
  border-radius: 4px;

  &:hover,
  &:active {
    background-color: ${colors.blueDark};
  }
`;

export const Error = styled.div`
  color: ${colors.red};
  text-align: center;

  margin-bottom: ${STANDARD_MARGIN};
`;

export const ErrorEmail = styled.div`
  text-align: center;
`;

export const ATag = styled.a`
  color: ${colors.red};
`;
