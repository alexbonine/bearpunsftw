import styled from "@emotion/styled";
import { STANDARD_INPUT_MARGIN } from "styles/constants";
import colors from "styles/colors";

const Input = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  display: block;
  margin-bottom: ${STANDARD_INPUT_MARGIN};
  padding: 4px 10px;
  border: 1px solid ${colors.grayLight};
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

export default Input;
