import styled from "@emotion/styled";
import mq from "styles/mq";
import TurksInn from "images/turks-inn.jpg";
import colors from "styles/colors";

export const Container = styled.div`
  max-height: 1000px;
  width: 100%;
  display: flex;
  ${mq({
    flexDirection: ["column-reverse", "column-reverse", "row", "row"],
    minHeight: ["", "", "100vh", "100vh"],
  })}
`;

export const Grid = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.red};
  ${mq({
    gridColumn: ["span 7", "span 7", "span 2", "span 2"],
    minHeight: ["400px", "400px", "100vh", "100vh"],
    padding: [
      "40px 40px 40px 40px",
      "40px 40px 40px 40px",
      "40px 40px 40px 40px",
      "0 80px 0 40px",
    ],
  })}
`;

export const Title = styled.h1`
  color: ${colors.white};
  padding-bottom: 20px;
  border-bottom: 2px solid white;
  margin-bottom: 20px;
  display: inline-block;
  ${mq({
    paddingRight: ["0px", "40px"],
    textAlign: ["center", "left"],
    width: ["100%", "auto"],
  })}
`;

export const NoChildren = styled.p`
  padding-top: 10px;
  font-size: 10px;
  color: ${colors.white};
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const EventContainer = styled.div`
  margin-top: ${(props) => (props.first ? "20px" : "10px")};
`;

export const EventDate = styled.h4`
  margin-bottom: 4px;
  color: ${colors.blueLightest};
  text-transform: uppercase;
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const EventAttire = styled.p`
  color: ${colors.white};
  margin-bottom: 4px;
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const EventTitle = styled.h5`
  color: ${colors.white};
  margin-bottom: 0px;
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const EventLocation = styled.p`
  color: ${colors.white};
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const EventLocationTag = styled.a`
  color: ${colors.white};
  text-decoration: underline;
  cursor: pointer;
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const EventTime = styled.p`
  color: ${colors.white};
  text-transform: uppercase;
  ${mq({
    textAlign: ["center", "left"],
  })}
`;

export const Image = styled.div`
  position: relative;
  background-image: url(${TurksInn});
  background-size: cover;
  ${mq({
    backgroundPosition: [
      "center center",
      "center center",
      "left center",
      "left center",
    ],
    gridColumn: ["span 7", "span 7", "span 5", "span 5"],
    gridRow: ["1", "1", "auto", "auto"],
    height: ["360px", "360px", "auto", "auto"],
  })}
`;
