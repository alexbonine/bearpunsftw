import styled from "@emotion/styled";
import TinderIconBase from "images/tinder.svg";
import TravelIconBase from "images/travel.svg";
import EngagementIconBase from "images/wedding-rings.svg";
import StoopIconBase from "images/stairs.svg";
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
  background-color: ${colors.red};
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

export const TimelineRowRev = styled(TimelineRow)`
  ${mq({
    flexDirection: ["column", "column", "row-reverse", "row-reverse"],
  })}
`;

export const TimelineRowItemContainer = styled.div`
  flex: 1;
  color: ${colors.black};
  position: relative;
  display: flex;
  ${mq({
    flex: ["none", "none", "1", "1"],
    marginBottom: ["20px", "20px", "0", "0"],
    "&:last-child": {
      marginBottom: ["0", "0", "0", "0"],
    },
  })}
`;

export const TimelineRowItemTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TimelineRowItemTextTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
`;

export const TimelineRowItemTextSubTitle = styled.h4`
  text-align: center;
  text-transform: uppercase;
`;

export const TimelineRowItemTextText = styled.p`
  text-align: center;
  padding-top: 10px;
`;

export const TimelineRowImage = styled.img`
  object-fit: cover;
`;

export const TimelineRowImageBottom = styled(TimelineRowImage)`
  ${mq({
    alignItems: ["none", "none", "flex-end", "flex-end"],
  })}
`;

export const TimelineRowImageBear = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  justify-self: flex-end;
`;

export const TimelineRowImageTravel = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  overflow: hidden;
`;

export const TimelineRowImageTravelHalf = styled.div`
  grid-column: span 3;
  display: flex;
  max-height: 100px;
  overflow: hidden;
`;

export const TimelineRowImageTravelThird = styled.div`
  grid-column: span 2;
  display: flex;
  max-height: 140px;
  overflow: hidden;
`;

export const TimelineRowImageEngagement = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 5px;
  overflow: hidden;
`;

export const TimelineRowImageEngagementPic = styled.div`
  display: flex;
  ${mq({
    minHeight: ["180px", "180px", "auto", "auto"],
    maxHeight: ["250px", "250px", "180px", "180px"],
  })}
`;

export const TimelineRowImageEngagementPic1 = styled(
  TimelineRowImageEngagementPic
)`
  grid-column: 1;
  grid-row: 1 / 3;
`;

export const TimelineRowImageEngagementPic2 = styled(
  TimelineRowImageEngagementPic
)`
  grid-column: 2;
  grid-row: 2 / 4;
`;

export const TimelineRowImageEngagementPic3 = styled(
  TimelineRowImageEngagementPic
)`
  grid-column: 3;
  grid-row: 1 / 3;
`;

export const TimelineRowImageNyc = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 5px;
  overflow: hidden;
`;

export const TimelineRowImageNycItem = styled.div`
  display: flex;
  ${mq({
    gridColumn: ["span 3", "span 3", "span 2", "span 2"],
    maxHeight: ["250px", "250px", "180px", "180px"],
  })}
`;

export const TimelineRowNotch = styled.div`
  border-radius: 50%;
  background-color: ${colors.blueLight};
  color: ${colors.red};
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

export const TinderIcon = styled(TinderIconBase)`
  fill: ${colors.red};
  ${mq({
    maxWidth: ["24px", "24px", "40px", "40px"],
  })}
`;

export const TravelIcon = styled(TravelIconBase)`
  fill: ${colors.red};
  ${mq({
    width: ["24px", "24px", "40px", "40px"],
  })}
`;

export const EngagementIcon = styled(EngagementIconBase)`
  fill: ${colors.red};
  ${mq({
    maxWidth: ["24px", "24px", "40px", "40px"],
  })}
`;

export const StoopIcon = styled(StoopIconBase)`
  fill: ${colors.red};
  ${mq({
    maxWidth: ["24px", "24px", "40px", "40px"],
  })}
`;

export const TimelineRowNotchSmall = styled(TimelineRowNotch)`
  height: 48px;
  width: 48px;
  // margin: 0 60px 0 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  color: ${colors.red};
  position: absolute;
  top: 50%;
  transform: translate(-80px, -50%);
  ${mq({
    display: ["flex", "flex", "none", "none"],
  })}
`;
