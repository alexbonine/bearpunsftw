import styled from "@emotion/styled";
import colors from "styles/colors";

const Button = styled.button`
  padding: 5px 20px;
  color: ${colors.white};
  background-color: ${colors.blue};
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 16px;
  min-width: 80px;
  border-radius: 4px;
  outline: none;

  &:hover,
  &:active {
    background-color: ${colors.blueDark};
  }
`;

export default Button;
