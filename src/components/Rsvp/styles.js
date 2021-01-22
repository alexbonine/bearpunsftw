import styled from "@emotion/styled";
import colors from "styles/colors";
import mq from "styles/mq";

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
    maxWidth: ["none", "none", "60%", "60%"],
    flexDirection: ["column", "column", "row", "row"],
  })}
`;

export const Image = styled.img`
  ${mq({
    height: ["auto", "auto", "400px", "400px"],
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
  })}
`;

export const Text = styled.p`
  margin-bottom: 30px;
`;

export const ATag = styled.a`
  color: ${colors.red};
`;
