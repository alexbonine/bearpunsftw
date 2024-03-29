import React, { useEffect, useRef, useState } from "react";
import useMq from "hooks/useMq";
import {
  Container,
  Divider,
  FlexContainer,
  Grid,
  GridItem,
  GridItemTitle,
  GridItemSpacer,
  MapContainer,
  TitleSmall,
  TitleSmallContainer,
} from "./styles";

const ThingsToDo = () => {
  const stuffRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(640);
  const [iframeWidth, setIframeWidth] = useState(480);
  const { isNotDesktop, screenHeight, screenWidth } = useMq();

  useEffect(() => {
    if (isNotDesktop) {
      setIframeHeight(400);
    } else {
      setIframeHeight(Math.min(screenHeight, 640));
    }

    if (screenWidth <= 500) {
      setIframeWidth(screenWidth - 20);
    } else {
      setIframeWidth(480);
    }
  }, [isNotDesktop, screenHeight, screenWidth]);

  return (
    <Container>
      <TitleSmallContainer>
        <TitleSmall>Things to...</TitleSmall>
        <Divider />
      </TitleSmallContainer>
      <FlexContainer>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1cRUpLiSyc0-nIyghXZ_Pu6fcTwupOdsC"
            width={iframeWidth}
            height={iframeHeight}
            title="NYC Map of Things To Do"
          ></iframe>
        </MapContainer>
        <Grid ref={stuffRef}>
          <GridItemTitle>
            <h1>Things</h1>
            <h1>to...</h1>
            <Divider />
          </GridItemTitle>
          <GridItem>
            <h2>Eat</h2>
            <ul>
              <li>
                <span role="img" aria-label="bagel emoji">
                  🥯
                </span>{" "}
                Brooklyn Bagel
              </li>
              <li>
                <span role="img" aria-label="sandwich emoji">
                  🥪
                </span>{" "}
                Katz's Delicatessen
              </li>
              <li>
                <span role="img" aria-label="noodle emoji">
                  🍜
                </span>{" "}
                Hanoi House
              </li>
              <li>
                <span role="img" aria-label="plate cutlery emoji">
                  🍽️
                </span>{" "}
                Hearth
              </li>
              <li>
                <span role="img" aria-label="fondue emoji">
                  🫕
                </span>{" "}
                Raclette
              </li>
              <li>
                <span role="img" aria-label="ice cream emoji">
                  🍨
                </span>{" "}
                Mikey Likes It Ice Cream
              </li>
            </ul>
          </GridItem>
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItem>
            <h2>See</h2>
            <ul>
              <li>
                <span role="img" aria-label="art emoji">
                  🖼️
                </span>{" "}
                The Metropolitan Museum of Art
              </li>
              <li>
                <span role="img" aria-label="park emoji">
                  🏞️
                </span>{" "}
                Central Park
              </li>
              <li>
                <span role="img" aria-label="cityscape emoji">
                  🏙️
                </span>{" "}
                The High Line
              </li>
              <li>
                <span role="img" aria-label="bridge emoji">
                  🌉
                </span>{" "}
                Brooklyn Bridge
              </li>
              <li>
                <span role="img" aria-label="statue of liberty emoji">
                  🗽
                </span>{" "}
                Staten Island Ferry & Statue of Liberty
              </li>
            </ul>
          </GridItem>
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItem>
            <h2>Drink</h2>
            <ul>
              <li>
                <span role="img" aria-label="saxophone emoji">
                  🎷
                </span>{" "}
                Rue B Jazz Bar
              </li>
              <li>
                <span role="img" aria-label="sake emoji">
                  🍶
                </span>{" "}
                Decibel Sake Bar
              </li>
              <li>
                <span role="img" aria-label="shot emoji">
                  🥃
                </span>{" "}
                Big Bar
              </li>
              <li>
                <span role="img" aria-label="taco emoji">
                  🌮
                </span>{" "}
                Pinks
              </li>
              <li>
                <span role="img" aria-label="margarita emoji">
                  🍹
                </span>{" "}
                Tio Pepe
              </li>
              <li>
                <span role="img" aria-label="cocktail emoji">
                  🍸
                </span>{" "}
                PDT
              </li>
            </ul>
          </GridItem>
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItemSpacer />
        </Grid>
      </FlexContainer>
    </Container>
  );
};

export default ThingsToDo;
