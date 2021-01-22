import styled from "@emotion/styled";
import colors from "styles/colors";

export const Container = styled.p`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  color: ${colors.gray};
  font-size: 10px;
`;

export const ATag = styled.a`
  color: ${colors.gray};
`;
