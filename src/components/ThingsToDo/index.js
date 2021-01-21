import React, { useEffect, useRef, useState } from "react";
import useComponentSize from "@rehooks/component-size";
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
  const size = useComponentSize(stuffRef);
  const { isNotDesktop } = useMq();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (isNotDesktop) {
      setIframeHeight(400);
    } else {
      setIframeHeight(Math.max(size.height, 640));
    }
  }, [size.width, isNotDesktop]);

  return (
    <Container>
      <TitleSmallContainer>
        <TitleSmall>Things to Eat See Drink</TitleSmall>
        <Divider />
      </TitleSmallContainer>
      <FlexContainer>
        <MapContainer>
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1cRUpLiSyc0-nIyghXZ_Pu6fcTwupOdsC"
            width={480}
            height={iframeHeight}
            title="NYC Map of Things To Do"
          ></iframe>
        </MapContainer>
        <Grid ref={stuffRef}>
          <GridItemTitle>
            <h1>Things to</h1>
            <h1>Eat See</h1>
            <h1>Drink</h1>
            <Divider />
          </GridItemTitle>
          <GridItem>
            <h2>Eat</h2>
            <ul>
              <li>🥯 Brooklyn Bagel</li>
              <li>🥪 Katz's Delicatessen</li>
              <li>🍜 Hanoi House</li>
              <li>🍽️ Hearth</li>
              <li>🫕 Raclette</li>
              <li>🍨 Mikey Likes It Ice Cream</li>
            </ul>
          </GridItem>
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItem>
            <h2>See</h2>
            <ul>
              <li>🖼️ The Metropolitan Museum of Art</li>
              <li>🏞️ Central Park</li>
              <li>🏙️ The High Line</li>
              <li>🌉 Brooklyn Bridge</li>
              <li>🗽 Staten Island Ferry & Statue of Liberty</li>
            </ul>
          </GridItem>
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItem>
            <h2>Drink</h2>
            <ul>
              <li>🎷 Rue B Jazz Bar</li>
              <li>🍶 Decibel Sake Bar</li>
              <li>🌮 Pinks</li>
              <li>🍹 Tio Pepe</li>
              <li>🍸 PDT</li>
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
