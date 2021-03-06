import styled from "@emotion/styled";
import { STANDARD_INPUT_MARGIN } from "styles/constants";
import colors from "styles/colors";

export const Container = styled.div`
  position: relative;
  padding: 50px 100px;
  display: flex;
  justify-content: center;
`;

export const Error = styled.div`
  color: ${colors.red};
`;

export const Counts = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalColumn = styled.div`
  width: 160px;
  display: flex;
  justify-content: flex-end;

  &:first-of-type {
    display: block;
  }
`;

export const TotalBox = styled.div``;

export const TotalItem = styled("div", {
  shouldForwardProp: (prop) => !["color"].includes(prop),
})`
  cursor: pointer;
  color: ${({ color }) => color || colors.black};
`;

export const EventsContainer = styled.div`
  min-width: 320px;
`;

export const AttendeesTitle = styled.h3`
  text-align: center;
  margin-top: ${STANDARD_INPUT_MARGIN};
  margin-bottom: ${STANDARD_INPUT_MARGIN};
`;

export const AttendeesList = styled.ul`
  height: 200px;
  overflow: auto;
  padding: 0 20px;
`;

export const Attendee = styled.li`
  list-style-type: disc;
  list-style-position: inside;
`;
