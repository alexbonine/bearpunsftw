import styled from "@emotion/styled";
import ButtonBase from "components/Button";
import { STANDARD_INPUT_MARGIN } from "styles/constants";

export const Title = styled.div`
  margin-bottom: ${STANDARD_INPUT_MARGIN};
  text-align: center;
`;

export const Button = styled(ButtonBase)`
  margin-top: ${STANDARD_INPUT_MARGIN};
  margin-bottom: ${STANDARD_INPUT_MARGIN};
`;
