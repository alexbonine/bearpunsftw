import styled from "@emotion/styled";
import { STANDARD_INPUT_MARGIN } from "styles/constants";
import colors from "styles/colors";

export const SubFormTitle = styled.div`
  margin-bottom: ${STANDARD_INPUT_MARGIN};
`;

export const Error = styled.div`
  color: ${colors.red};
  text-align: center;

  margin-bottom: ${STANDARD_INPUT_MARGIN};
`;
