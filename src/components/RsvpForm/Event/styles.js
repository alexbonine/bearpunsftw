import styled from "@emotion/styled";
import mq from "styles/mq";
import { STANDARD_INPUT_MARGIN } from "styles/constants";
import colors from "styles/colors";

export const Event = styled.div`
  margin-bottom: ${STANDARD_INPUT_MARGIN};
  display: flex;
  flex-shrink: 0;
`;

export const PlusMinusContainer = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.button`
  border: 1px solid ${({ onClick }) => (onClick ? colors.gray : "")};
  width: 20px;
  height: 20px;
  border-radius: 100%;
  position: relative;
  margin: 4px;
  display: inline-block;
  vertical-align: middle;
  outline: none;
  background-color: ${colors.white};

  &:before,
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:hover {
    background-color: ${({ onClick }) => (onClick ? colors.grayLightest : "")};
  }

  &:active {
    background-color: ${({ onClick }) => (onClick ? colors.grayLight : "")};
  }
`;

export const Plus = styled(Circle)`
  border-color: ${({ onClick }) => (onClick ? colors.green : colors.grayLight)};

  &:before,
  &:after {
    background-color: ${({ onClick }) =>
      onClick ? colors.green : colors.grayLight};
  }

  &:before {
    width: 2px;
    margin: 3px auto;
  }

  &:after {
    margin: auto 3px;
    height: 2px;
  }

  &:hover {
    cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
  }
`;

export const Minus = styled(Circle)`
  border-color: ${({ onClick }) => (onClick ? colors.red : colors.grayLight)};

  &:before {
    background-color: ${({ onClick }) =>
      onClick ? colors.red : colors.grayLight};
    margin: auto 3px;
    height: 2px;
    box-shadow: 0px 1px 1px #ffffff9e;
  }

  &:hover {
    cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};
  }
`;

export const Info = styled.div`
  width: 240px;
`;

export const Date = styled.h4`
  margin-bottom: 4px;
  color: ${colors.blueLight};
  text-transform: uppercase;
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const Title = styled.h5`
  color: ${colors.black};
  margin-bottom: 0px;
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const Location = styled.p`
  color: ${colors.black};
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const Time = styled.p`
  color: ${colors.black};
  text-transform: uppercase;
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const ToFollow = styled.p`
  color: ${colors.black};
`;
