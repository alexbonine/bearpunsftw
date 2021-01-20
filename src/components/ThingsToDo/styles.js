import styled from "@emotion/styled";
import mq from "styles/mq";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #b5e3f5;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 100px;
`;

export const MapContainer = styled.div``;

export const Grid = styled.div`
  flex: 1;
  padding-left: 100px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
`;

export const GridItem = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  // align-items: center;
  ${mq({
    gridColumn: ["span 3", "span 3", "span 2", "span 2"],
    // padding: ["0", "0", "60px 0", "60px 0"],
  })}
`;

export const GridItemSpacer = styled.div`
  ${mq({
    gridColumn: ["none", "none", "span 1", "span 1"],
  })}
`;
