import styled from "@emotion/styled";

export const Event = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

export const EventItems = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 160px;
`;

export const EventItem = styled("span", {
  shouldForwardProp: (prop) => !["color"].includes(prop),
})`
  color: ${({ color }) => color};
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }
`;
