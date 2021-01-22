import styled from "@emotion/styled";
import ScEngagement from "images/sc-engagement.jpeg";
import colors from "styles/colors";
import mq from "styles/mq";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  background-color: white;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  position: relative;
`;

export const Image = styled.div`
  position: relative;
  background-image: url(${ScEngagement});
  min-height: 100vh;
  background-size: cover;
  background-position: right bottom;
  transform: scaleX(-1);
  ${mq({
    backgroundPosition: [
      "center bottom",
      "center bottom",
      "right bottom",
      "right bottom",
    ],
    gridColumn: ["span 4", "span 4", "span 3", "span 3"],
  })}
`;

export const TextOverlayContainer = styled.div`
  position: absolute;
  right: 40px;
  z-index: 1;
  color: white;
  width: 200px;
  transform: scaleX(-1);
  ${mq({
    bottom: ["20px", "20px", "50px", "50px"],
  })}
`;

export const Shawna = styled.h1`
  text-align: left;
`;

export const Plus = styled.h1`
  padding-left: 100px;
`;

export const Alex = styled.h1`
  text-align: right;
`;

export const Countdown = styled.h4`
  color: ${colors.blueLight};
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  overflow: hidden;
  ${mq({
    gridColumn: ["span 4", "span 4", "span 1", "span 1"],
    height: ["400px", "400px", "100vh", "100vh"],
  })}
`;

export const Skyline = styled.img`
  position: absolute;
  bottom: 0;
  max-width: 120%;
  height: auto;
  left: 50%;
  transform: translateX(-50%);
`;
