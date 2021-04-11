import styled from "@emotion/styled";
import { STANDARD_INPUT_MARGIN } from "styles/constants";
import colors from "styles/colors";

const Button = styled.button`
  margin-top: ${STANDARD_INPUT_MARGIN};
  margin-bottom: ${STANDARD_INPUT_MARGIN};
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

export default Button;
