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

export const TextContainer = styled.div`
  min-width: 370px;
  padding: 0 80px 0 40px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.red};
  ${mq({
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

export const EventContainer = styled.div`
  margin-top: ${(props) => (props.first ? "20px" : "10px")};
`;

export const EventDate = styled.h4`
  margin-bottom: 4px;
  color: ${colors.blueLight};
  text-transform: uppercase;
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

export const ImageContainerSmall = styled.div`
  background-image: url(${TurksInn});
  background-size: cover;
  height: 30rem;
  background-position: 50% 50%;
  ${mq({ display: ["block", "block", "none", "none"] })}
`;

export const ImageContainerLarge = styled.div`
  max-width: 1168px;
  ${mq({ display: ["none", "none", "block", "block"] })}
`;

export const Image = styled.img`
  display: block;
  height: 100vh;
  background-size: cover;
  background-position: 50% 50%;
`;
