import styled from "@emotion/styled";
import { Link } from "gatsby";
import colors from "styles/colors";
import mq from "styles/mq";
import pseudo from "styles/pseudo";
import AppleIconBase from "images/nyc-icon.svg";

export const Container = styled.div`
  padding-bottom: 80px;
  display: flex;
  justify-content: center;
  ${mq({
    marginTop: ["0", "0", "100px", "100px"],
  })}
`;

export const InnerContainer = styled.div`
  display: flex;
  ${mq({
    maxWidth: ["100vw", "100vw", "60%", "60%"],
    flexDirection: ["column", "column", "row", "row"],
  })}
`;

export const Image = styled.img`
  ${mq({
    height: ["auto", "auto", "500px", "500px"],
  })}
`;

export const WordsContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  max-width: 350px;
  text-align: center;
  ${mq({
    padding: ["60px", "60px", "0 0 0 80px", "0 0 0 80px"],
    maxWidth: ["none", "none", "350px", "350px"],
    height: ["80vh", "80vh", "500px", "500px"],
    minHeight: ["80vh", "80vh", "500px", "500px"],
  })}
`;

export const Text = styled.p``;

export const ATag = styled(Link)`
  text-transform: uppercase;
  padding: 8px 50px;
  font-size: 16px;
  margin-top: 8px;

  ${pseudo({
    backgroundColor: [
      colors.red,
      colors.redDark,
      colors.redDark,
      colors.redDark,
    ],
    color: [colors.white, colors.white, colors.white, colors.white],
  })}
`;

export const AppleIcon = styled(AppleIconBase)`
  fill: ${colors.red};
  width: 64px;
  height: 64px;
`;
