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

  ${mq({
    padding: ["0 0 100px 0", "60px 100px 100px 100px", "100px", "100px"],
    flexDirection: ["column-reverse", "column-reverse", "row", "row"],
  })}
`;

export const MapContainer = styled.div`
  ${mq({
    display: ["flex", "flex", 0, 0],
    justifyContent: ["center", "center", "normal", "normal"],
  })}
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  ${mq({
    paddingLeft: ["0", "0", "60px", "100px"],
    paddingBottom: ["60px", "60px", 0, 0],
    maxHeight: ["none", "none", "100vh", "100vh"],
  })}
`;

export const GridItem = styled.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  ${mq({
    gridColumn: ["span 6", "span 3", "span 3", "span 2"],
    alignItems: ["center", "center", "normal", "normal"],
    paddingTop: ["60px", "0", "0", "0"],
  })}
`;

export const GridItemSpacer = styled.div`
  ${mq({
    gridColumn: ["none", "none", "none", "span 1"],
    display: ["none", "none", "none", "block"],
  })}
`;

export const GridItemTitle = styled(GridItem)`
  ${mq({
    alignItems: ["center", "normal", "normal", "normal"],
    gridColumn: ["span 6", "span 3", "span 3", "span 3"],
    display: ["none", "none", "block", "block"],
  })}
`;

export const TitleSmallContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TitleSmall = styled.h1`
  padding-top: 80px;
  text-align: center;
  ${mq({
    display: ["block", "block", "none", "none"],
  })}
`;

export const Divider = styled.div`
  height: 2px;
  background-color: black;
  padding-top: 4px;
  ${mq({
    width: ["80%", "80%", "60%", "240px"],
  })}
`;
