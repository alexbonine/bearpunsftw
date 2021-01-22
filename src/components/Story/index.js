import React from "react";
import BearWavingGif from "images/bear-waving.gif";
import Porto from "images/porto.jpg";
import NzFlowers from "images/nz-flowers.jpg";
import Cliffs from "images/cliffs.jpg";
import TokyoRex from "images/tokyo-rex.jpg";
import KangarooPet from "images/kangaroo-pet.jpg";
import NzKayak from "images/nz-kayak.jpg";
import SfBridgeHeart from "images/sf-bridge-heart.jpg";
import PostEngagement from "images/post-engagement.jpg";
import ShawnaRing from "images/shawna-ring.jpg";
import TruckEngagement from "images/truck-engagement.jpg";
import NycPizza from "images/nyc-pizza.jpg";
import NycPicnic from "images/nyc-picnic.jpg";
import NycPinks from "images/nyc-pinks.jpg";
import NycSnow from "images/nyc-snow.jpg";
import NycStoopShawna from "images/nyc-stoop-shawna.jpg";
import NycXmas from "images/nyc-xmas.jpg";
import IconCopyright from "components/IconCopyright";
import {
  Container,
  EngagementIcon,
  InnerContainer,
  Line,
  LineEnd,
  LineInnerEndpoint,
  LineStart,
  StoopIcon,
  Timeline,
  TimelineRow,
  TimelineRowImage,
  TimelineRowImageBear,
  TimelineRowImageBottom,
  TimelineRowImageRight,
  TimelineRowImageEngagement,
  TimelineRowImageEngagementPic1,
  TimelineRowImageEngagementPic2,
  TimelineRowImageEngagementPic3,
  TimelineRowImageNyc,
  TimelineRowImageNycItem,
  TimelineRowImageTravel,
  TimelineRowImageTravelHalf,
  TimelineRowImageTravelThird,
  TimelineRowItemContainer,
  TimelineRowItemTextContainer,
  TimelineRowItemTextSubTitle,
  TimelineRowItemTextText,
  TimelineRowItemTextTitle,
  TimelineRowNotch,
  TimelineRowNotchSmall,
  TimelineRowRev,
  TinderIcon,
  Title,
  TravelIcon,
} from "./styles";

const Story = () => {
  return (
    <Container>
      <Title>Our Story</Title>
      <InnerContainer>
        <LineStart>
          <LineInnerEndpoint />
        </LineStart>
        <Line />
        <LineEnd>
          <LineInnerEndpoint />
        </LineEnd>
        <Timeline>
          <TimelineRow>
            <TimelineRowItemContainer>
              <TimelineRowImageBear src={BearWavingGif} />
              <TimelineRowNotchSmall>
                <TinderIcon />
              </TimelineRowNotchSmall>
            </TimelineRowItemContainer>
            <TimelineRowNotch>
              <TinderIcon />
            </TimelineRowNotch>
            <TimelineRowItemContainer>
              <TimelineRowItemTextContainer>
                <TimelineRowItemTextTitle>
                  It started with a swipe
                </TimelineRowItemTextTitle>
                <TimelineRowItemTextSubTitle>
                  #bearpunsftw
                </TimelineRowItemTextSubTitle>
                <TimelineRowItemTextText>
                  Alex and Shawna have a typical Silicon Valley meet cute. After
                  both swiping right on Tinder, Shawna captured Alex's attention
                  with a meme (shown to the right), asking if it was Friday yet?
                  He fired back with, tell me about it, I'm bearly surviving;
                  perfect response. On their first date, they had easy
                  conversation and laughs over charcuterie and while Shawna left
                  the date to apply for a job in Ireland, she was cautiously
                  optimistic about this one.
                </TimelineRowItemTextText>
              </TimelineRowItemTextContainer>
            </TimelineRowItemContainer>
          </TimelineRow>
          <TimelineRowRev>
            <TimelineRowItemContainer>
              <TimelineRowImageTravel>
                <TimelineRowImageTravelHalf>
                  <TimelineRowImage src={Porto} />
                </TimelineRowImageTravelHalf>
                <TimelineRowImageTravelHalf>
                  <TimelineRowImage src={NzFlowers} />
                </TimelineRowImageTravelHalf>
                <TimelineRowImageTravelThird>
                  <TimelineRowImage src={Cliffs} />
                </TimelineRowImageTravelThird>
                <TimelineRowImageTravelThird>
                  <TimelineRowImage src={TokyoRex} />
                </TimelineRowImageTravelThird>
                <TimelineRowImageTravelThird>
                  <TimelineRowImage src={KangarooPet} />
                </TimelineRowImageTravelThird>
                <TimelineRowImageTravelHalf>
                  <TimelineRowImage src={NzKayak} />
                </TimelineRowImageTravelHalf>
                <TimelineRowImageTravelHalf>
                  <TimelineRowImage src={SfBridgeHeart} />
                </TimelineRowImageTravelHalf>
              </TimelineRowImageTravel>
              <TimelineRowNotchSmall>
                <TravelIcon />
              </TimelineRowNotchSmall>
            </TimelineRowItemContainer>
            <TimelineRowNotch>
              <TravelIcon />
            </TimelineRowNotch>
            <TimelineRowItemContainer>
              <TimelineRowItemTextContainer>
                <TimelineRowItemTextTitle>
                  Adventure Time
                </TimelineRowItemTextTitle>
                <TimelineRowItemTextSubTitle>
                  Jetsetting
                </TimelineRowItemTextSubTitle>
                <TimelineRowItemTextText>
                  They share a love of exploration and have traveled to over 10
                  countries so far. Their first big trip was to Japan over
                  Christmas in 2016. This was the first time Shawna was
                  introduced to Alex's LOVE of walking; after 13 miles on day 1,
                  her boots were relegated to evening use only. Whether road
                  tripping through New Zealand, giving belly rubs to kangaroos
                  or finding themselves on an accidental dive bar crawl through
                  the Castro (and now the Lower East Side), there is always fun
                  to be had and memories to be made.
                </TimelineRowItemTextText>
              </TimelineRowItemTextContainer>
            </TimelineRowItemContainer>
          </TimelineRowRev>
          <TimelineRow>
            <TimelineRowItemContainer>
              <TimelineRowImageEngagement>
                <TimelineRowImageEngagementPic1>
                  <TimelineRowImageBottom src={PostEngagement} />
                </TimelineRowImageEngagementPic1>
                <TimelineRowImageEngagementPic2>
                  <TimelineRowImage src={TruckEngagement} />
                </TimelineRowImageEngagementPic2>
                <TimelineRowImageEngagementPic3>
                  <TimelineRowImage src={ShawnaRing} />
                </TimelineRowImageEngagementPic3>
              </TimelineRowImageEngagement>
              <TimelineRowNotchSmall>
                <EngagementIcon />
              </TimelineRowNotchSmall>
            </TimelineRowItemContainer>
            <TimelineRowNotch>
              <EngagementIcon />
            </TimelineRowNotch>
            <TimelineRowItemContainer>
              <TimelineRowItemTextContainer>
                <TimelineRowItemTextTitle>The Ring</TimelineRowItemTextTitle>
                <TimelineRowItemTextSubTitle>
                  YESSSSSS
                </TimelineRowItemTextSubTitle>
                <TimelineRowItemTextText>
                  After traveling for 15 hours, Alex sent Shawna out to pamper
                  herself with a manicure and massage ahead of their going away
                  party the next night. Little did she know that in 24 hours
                  they would be celebrating more than their departure from the
                  west coast. Alex spent the big day pacing and waiting for the
                  sun to come out. In true SF fashion, Karl (the fog), did not
                  cooperate but none of that mattered to Shawna when she turned
                  around to find him down on one knee. We are forever thankful
                  we were able to celebrate this moment with our families and
                  friends.
                </TimelineRowItemTextText>
              </TimelineRowItemTextContainer>
            </TimelineRowItemContainer>
          </TimelineRow>
          <TimelineRowRev>
            <TimelineRowItemContainer>
              <TimelineRowImageNyc>
                <TimelineRowImageNycItem>
                  <TimelineRowImageRight src={NycStoopShawna} />
                </TimelineRowImageNycItem>
                <TimelineRowImageNycItem>
                  <TimelineRowImage src={NycPicnic} />
                </TimelineRowImageNycItem>
                <TimelineRowImageNycItem>
                  <TimelineRowImage src={NycPinks} />
                </TimelineRowImageNycItem>
                <TimelineRowImageNycItem>
                  <TimelineRowImage src={NycPizza} />
                </TimelineRowImageNycItem>
                <TimelineRowImageNycItem>
                  <TimelineRowImage src={NycSnow} />
                </TimelineRowImageNycItem>
                <TimelineRowImageNycItem>
                  <TimelineRowImage src={NycXmas} />
                </TimelineRowImageNycItem>
              </TimelineRowImageNyc>
              <TimelineRowNotchSmall>
                <StoopIcon />
              </TimelineRowNotchSmall>
            </TimelineRowItemContainer>
            <TimelineRowNotch>
              <StoopIcon />
            </TimelineRowNotch>
            <TimelineRowItemContainer>
              <TimelineRowItemTextContainer>
                <TimelineRowItemTextTitle>
                  Baby Gets a full size oven
                </TimelineRowItemTextTitle>
                <TimelineRowItemTextSubTitle>
                  Stoop Life
                </TimelineRowItemTextSubTitle>
                <TimelineRowItemTextText>
                  Alex and Shawna set foot in NYC on March 1st 2020, excited
                  about the adventures they would embark on. They landed the
                  perfect place in the East Village, ensuring that Alex got the
                  full size oven he'd need to fully realize his dream of being a
                  pizza chef. Even as everything shut down around them, they
                  found a sense of community on their block that has continued
                  to thrive through to today. Summer and fall nights usually
                  ended on the stoop, where they have lovingly earned he
                  nickname "the cage couple." While this isn't the NYC
                  experience they were expecting, they've had a blast so far and
                  can't wait for what's next!
                </TimelineRowItemTextText>
              </TimelineRowItemTextContainer>
            </TimelineRowItemContainer>
          </TimelineRowRev>
        </Timeline>
      </InnerContainer>
      <IconCopyright />
    </Container>
  );
};

export default Story;
