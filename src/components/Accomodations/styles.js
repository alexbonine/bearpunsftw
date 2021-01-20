import styled from "@emotion/styled";
import mq from "styles/mq";
import pseudo from "styles/pseudo";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: white;
`;

export const Title = styled.h1`
  color: black;
  padding-top: 80px;
  text-align: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextBox = styled.div`
  padding: 24px 40px 0px 40px;

  ${mq({
    maxWidth: ["100%", "100%", "60%", "60%"],
  })}
`;

export const Text = styled.p`
  text-align: center;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-row-gap: 60px;
  ${mq({
    margin: ["0", "0", "0 100px", "0 100px"],
    padding: ["0", "0", "60px 0", "60px 0"],
  })}
`;

export const GridItem = styled.div`
  ${mq({
    gridColumn: ["none", "none", "span 1", "span 1"],
    padding: ["0", "0", "60px 0", "60px 0"],
  })}
`;

export const GridTop = styled(Grid)`
  grid-template-columns: 1fr 2px 1fr;
  ${mq({
    borderTop: ["none", "none", "2px solid black", "2px solid black"],
    borderBottom: ["none", "none", "2px solid black", "2px solid black"],
    marginTop: ["60px", "60px", "80px", "80px"],
  })}
`;

export const GridItemDivider = styled.div``;

export const VerticalDivider = styled.div`
  width: 2px;
  height: 100%;
  background-color: black;
  ${mq({
    display: ["none", "none", "block", "block"],
  })}
`;

export const HorizontalDivider = styled.div`
  height: 2px;
  width: 60%;
  background-color: black;
  ${mq({
    marginTop: ["60px", "60px", "0", "0"],
    display: ["block", "block", "none", "none"],
  })}
`;

export const GridBottom = styled(Grid)`
  grid-template-columns: 1fr 2px 1fr 2px 1fr;
  ${mq({
    marginTop: ["60px", "60px", "0", "0"],
    paddingBottom: ["160px", "160px", "120px", "120px"],
  })}
`;

export const Place = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PlaceIcon = styled.div`
  width: 32px;
  margin-bottom: 16px;
`;

export const PlaceTitle = styled.h3`
  text-align: center;
`;

export const PlaceText = styled.p`
  max-width: 60%;
  text-align: center;
`;

export const PlaceTextSpacing = styled(PlaceText)`
  margin-bottom: 16px;
`;

export const PlaceLink = styled.a`
  text-transform: uppercase;
  padding: 8px 50px;
  border: 2px solid black;
  font-size: 12px;
  margin-top: 8px;

  ${pseudo({
    backgroundColor: ["white", "black", "black", "black"],
    color: ["black", "white", "white", "white"],
  })}
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Map = styled.img`
  height: 100%;
  object-fit: contain;
  ${mq({
    width: ["100%", "100%", "80%", "80%"],
    maxHeight: ["100vh", "100vh", "635px", "540px"],
  })}
`;
