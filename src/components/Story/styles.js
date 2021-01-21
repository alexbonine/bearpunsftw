import styled from "@emotion/styled";
import mq from "styles/mq";
import colors from "styles/colors";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${colors.white};
  position: relative;
  ${mq({
    padding: [
      "80px 20px 100px 20px",
      "80px 40px 100px 40px",
      "80px 100px 100px 100px",
      "80px 100px 100px 100px",
    ],
  })};
`;

export const Title = styled.h1`
  text-align: center;
`;

export const InnerContainer = styled.div`
  position: relative;
  ${mq({
    marginTop: ["40px", "40px", "60px", "60px"],
  })}
`;

export const Line = styled.div`
  width: 4px;
  background-color: ${colors.blueLight};
  height: 100%;
  position: absolute;
  ${mq({
    transform: ["none", "none", "translateX(-50%)", "translateX(-50%)"],
    left: ["22px", "22px", "50%", "50%"],
  })}
`;

export const LineStart = styled(Line)`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  ${mq({
    left: ["16px", "16px", "50%", "50%"],
  })}
`;

export const LineEnd = styled(LineStart)`
  bottom: 0;
`;

export const LineInnerEndpoint = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${colors.grayLight};
`;

export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  ${mq({
    padding: ["40px 0", "40px 0", "60px 0", "60px 0"],
  })}
`;

export const TimelineRow = styled.div`
  display: flex;
  ${mq({
    alignItems: ["normal", "normal", "center", "center"],
    flexDirection: ["column", "column", "row", "row"],
    justifyContent: ["normal", "normal", "space-between", "space-between"],
    paddingBottom: ["80px", "80px", "60px", "60px"],
    "&:last-child": {
      paddingBottom: ["0", "0", "0", "0"],
    },
    marginLeft: ["80px", "80px", "0", "0"],
  })}
`;

export const TimelineRowItemContainer = styled.div`
  flex: 1;
  height: 300px;
  background-color: purple;
  color: ${colors.white};
  position: relative;
  ${mq({
    flex: ["none", "none", "1", "1"],
    marginBottom: ["20px", "20px", "0", "0"],
    "&:last-child": {
      marginBottom: ["0", "0", "0", "0"],
    },
  })}
`;
// ${mq({
//   width: ["100%", "100%", "400px", "400px"],
// })}
export const TimelineRowItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimelineRowNotch = styled.div`
  border-radius: 50%;
  background-color: ${colors.blueLight};
  color: ${colors.grayLight};
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 70px;
  width: 70px;
  margin: 0 60px;
  ${mq({
    display: ["none", "none", "flex", "flex"],
  })}
`;
// ${mq({
//   height: ["50px", "50px", "70px", "70px"],
//   width: ["50px", "50px", "70px", "70px"],
//   margin: ["0 60px 0 0", "0 60px 0 0", "0 60px", "0 60px"],
//   position: ["absolute", "absolute", "relative", "relative"],
// })}

export const TimelineRowNotchSmall = styled(TimelineRowNotch)`
  height: 48px;
  width: 48px;
  // margin: 0 60px 0 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  color: ${colors.grayLight};
  position: absolute;
  top: 50%;
  transform: translate(-80px, -50%);
  ${mq({
    display: ["flex", "flex", "none", "none"],
  })}
`;
