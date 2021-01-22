import styled from "@emotion/styled";
import ArticleBase from "components/Article";
import mq from "styles/mq";

export const Article = styled(ArticleBase)`
  position: relative;
  z-index: -1;
  width: 100vw;
  ${mq({
    height: ["normal", "noraml", "100vh", "100vh"],
  })}
`;
