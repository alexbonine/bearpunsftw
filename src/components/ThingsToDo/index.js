import React, { useEffect, useRef, useState } from "react";
import useComponentSize from "@rehooks/component-size";
import {
  Container,
  FlexContainer,
  Grid,
  GridItem,
  GridItemSpacer,
  MapContainer,
} from "./styles";

const ThingsToDo = () => {
  const stuffRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState(640);
  const size = useComponentSize(stuffRef);
  console.log(size);

  useEffect(() => {
    setIframeHeight(Math.max(size.height, 640));
    console.log("useEffect", size.height, Math.max(size.height, 640));
  }, [size.width]);

  return (
    <Container>
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
          <GridItem>
            <h5>Chomp Chomp Chomp</h5>
            <p>Restauarnt 1</p>
            <p>Restauarnt 2</p>
            <p>Restauarnt 3</p>
            <p>Restauarnt 4</p>
            <p>Restauarnt 5</p>
          </GridItem>
          <GridItemSpacer />
          <GridItemSpacer />
          <GridItem>
            <h5>Think Walk See</h5>
            <p>The Metropolitan Museum of Art</p>
            <p>Central Park</p>
            <p>The High Line</p>
            <p>Thing 4</p>
            <p>Thing 5</p>
          </GridItem>
          <GridItem>
            <h5>Glug Glug Glug</h5>
            <p>Bar 1</p>
            <p>Bar 2</p>
            <p>Bar 3</p>
            <p>Bar 4</p>
            <p>Bar 5</p>
          </GridItem>
          <GridItemSpacer />
        </Grid>
      </FlexContainer>
    </Container>
  );
};

export default ThingsToDo;
