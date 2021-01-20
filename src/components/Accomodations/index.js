import React from "react";
import HotelIcon from "images/hotel-bags.svg";
import AirbnbIcon from "images/airbnb-house.svg";
import IconCopyright from "components/IconCopyright";
import AccomodationsMap from "images/accomodations.png";
import {
  Container,
  GridBottom,
  GridTop,
  GridItem,
  GridItemDivider,
  HorizontalDivider,
  Map,
  MapContainer,
  Place,
  PlaceIcon,
  PlaceLink,
  PlaceText,
  PlaceTextSpacing,
  PlaceTitle,
  Text,
  TextBox,
  TextContainer,
  Title,
  VerticalDivider,
} from "./styles";

const Accomodations = () => {
  return (
    <Container>
      <Title>Accomodations</Title>
      <TextContainer>
        <TextBox>
          <Text>
            For the "out of towners" AKA 95% of you, here's the scoop.
          </Text>
          <Text>
            Blocks of rooms have been reserved at Moxy NYC East Village. This
            will act as the main hub and where the Sunday farewell breakfast
            will be held. It's walking distance of our apartment and easy access
            to trains (the L will take you straight to the venue).
          </Text>
          <Text>
            For those looking for something different, we've included a couple
            location recommendations for AirBnB.
          </Text>
        </TextBox>
        <HorizontalDivider />
      </TextContainer>
      <GridTop>
        <GridItem>
          <Place>
            <PlaceIcon>
              <HotelIcon />
            </PlaceIcon>
            <PlaceTitle>Moxy NYC East Village</PlaceTitle>
            <PlaceTextSpacing>HOTEL</PlaceTextSpacing>
            <PlaceText>112 East 11th Street</PlaceText>
            <PlaceTextSpacing>New York, NY 10003</PlaceTextSpacing>
            <PlaceTextSpacing>(212) 288-6699</PlaceTextSpacing>
            <PlaceTextSpacing>
              1 Queen or 2 Double beds rooms are available and rates vary by
              type. Use the link below or be sure you mention the Carney/Bonine
              wedding block to receive the group rate. Rooms must be booked by
              8/18/21 to take advantage of the group rate.
            </PlaceTextSpacing>
            <PlaceText>0.5 miles to Shawna & Alex (11 min walk)</PlaceText>
            <PlaceText>
              7.4 miles to Turks Inn (22 min L-train or car)
            </PlaceText>
            <PlaceText>9.7 miles to LGA (~30-45 min car)</PlaceText>
            <PlaceText>14.1 miles to EWR (~30-55 min car)</PlaceText>
            <PlaceTextSpacing>
              16.9 miles to JFK (~35-55 min car)
            </PlaceTextSpacing>
            <PlaceLink href="https://www.marriott.com/hotels/travel/nycot-moxy-nyc-east-village/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTI5MTI4OTMtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl">
              View
            </PlaceLink>
          </Place>
        </GridItem>
        <GridItemDivider>
          <VerticalDivider />
        </GridItemDivider>
        <GridItem>
          <MapContainer>
            <Map src={AccomodationsMap} />
          </MapContainer>
        </GridItem>
      </GridTop>
      <GridBottom>
        <GridItem>
          <Place>
            <PlaceIcon>
              <HotelIcon />
            </PlaceIcon>
            <PlaceTitle>W New York - Union Square</PlaceTitle>
            <PlaceTextSpacing>HOTEL</PlaceTextSpacing>
            <PlaceText>201 Park Avenue South</PlaceText>
            <PlaceTextSpacing>New York, NY 10003</PlaceTextSpacing>
            <PlaceTextSpacing>(212) 253-9119</PlaceTextSpacing>
            <PlaceTextSpacing>
              1 King or 2 Double bed rooms are available and rates vary by room
              type. Make sure you mention the Carney/Bonine wedding block to
              receive a group rate.
            </PlaceTextSpacing>
            <PlaceLink href="https://www.marriott.com/hotels/travel/nycot-moxy-nyc-east-village/?scid=bb1a189a-fec3-4d19-a255-54ba596febe2&y_source=1_MTI5MTI4OTMtNzE1LWxvY2F0aW9uLmdvb2dsZV93ZWJzaXRlX292ZXJyaWRl">
              View
            </PlaceLink>
          </Place>
        </GridItem>
        <GridItemDivider>
          <VerticalDivider />
        </GridItemDivider>
        <GridItem>
          <Place>
            <PlaceIcon>
              <AirbnbIcon />
            </PlaceIcon>
            <PlaceTitle>East Village</PlaceTitle>
            <PlaceTextSpacing>AIRBNB</PlaceTextSpacing>
            <PlaceTextSpacing>New York, NY 10009</PlaceTextSpacing>
            <PlaceTextSpacing>
              For those wanting the genuine "East Village experience" check out
              AirBnBs walking distance to us, the L train, and about 20ish
              minute car ride to Turks Inn.
            </PlaceTextSpacing>
            <PlaceLink href="https://www.airbnb.com/s/East-Village--New-York--NY--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&checkin=2021-09-16&checkout=2021-09-19&source=structured_search_input_header&search_type=filter_change&ne_lat=40.734353873913676&ne_lng=-73.97286892578126&sw_lat=40.72004405868993&sw_lng=-73.99569988891602&zoom=15&search_by_map=true&place_id=ChIJRU7M53dZwokR7GgPQPM1qW8&room_types%5B%5D=Entire%20home%2Fapt">
              View
            </PlaceLink>
          </Place>
        </GridItem>
        <GridItemDivider>
          <VerticalDivider />
        </GridItemDivider>
        <GridItem>
          <Place>
            <PlaceIcon>
              <AirbnbIcon />
            </PlaceIcon>
            <PlaceTitle>Bushwick</PlaceTitle>
            <PlaceTextSpacing>AIRBNB</PlaceTextSpacing>
            <PlaceTextSpacing>Brooklyn, NY 11237</PlaceTextSpacing>
            <PlaceTextSpacing>
              For those who are only able to join for the big day, check out
              AirBnBs closer to the venue.
            </PlaceTextSpacing>
            <PlaceLink href="https://www.airbnb.com/s/Hana-Natural--Wyckoff-Avenue--Brooklyn--NY--USA/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&checkin=2021-09-17&checkout=2021-09-19&adults=0&source=structured_search_input_header&search_type=autocomplete_click&room_types%5B%5D=Entire%20home%2Fapt&place_id=ChIJAxNFrjpcwokR7bxesI5CdYc">
              View
            </PlaceLink>
          </Place>
        </GridItem>
      </GridBottom>
      <IconCopyright />
    </Container>
  );
};

export default Accomodations;
