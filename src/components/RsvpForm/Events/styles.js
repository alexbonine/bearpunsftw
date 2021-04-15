import styled from "@emotion/styled";
import { STANDARD_INPUT_MARGIN } from "styles/constants";
import ButtonBase from "components/Button";
import colors from "styles/colors";

export const Welcome = styled.div`
  text-align: center;
  margin-bottom: ${STANDARD_INPUT_MARGIN};
  max-width: 60%;
`;

export const SimpleContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${STANDARD_INPUT_MARGIN};
`;

export const Button = styled(ButtonBase)`
  margin-top: ${STANDARD_INPUT_MARGIN};
`;

export const NotAttending = styled(ButtonBase)`
  width: 160px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;

  ${({ selected }) =>
    selected
      ? {
          color: colors.white,
          backgroundColor: colors.red,
          borderColor: colors.red,
          "&:hover": {
            backgroundColor: colors.red,
            borderColor: colors.red,
          },
        }
      : {
          color: colors.red,
          backgroundColor: colors.white,
          borderColor: colors.red,
          "&:hover": {
            color: colors.white,
            backgroundColor: colors.red,
            borderColor: colors.red,
          },
        }}
`;

export const Attending = styled(ButtonBase)`
  width: 160px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  ${({ selected }) =>
    selected
      ? {
          color: colors.white,
          backgroundColor: colors.green,
          borderColor: colors.green,
          "&:hover": {
            backgroundColor: colors.green,
            borderColor: colors.green,
          },
        }
      : {
          color: colors.green,
          backgroundColor: colors.white,
          borderColor: colors.green,
          "&:hover": {
            color: colors.white,
            backgroundColor: colors.green,
            borderColor: colors.green,
          },
        }}
`;

export const EventsContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Error = styled.div`
  margin-top: ${STANDARD_INPUT_MARGIN};
  color: ${colors.red};
  text-align: center;
`;
