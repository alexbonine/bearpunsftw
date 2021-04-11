import React, { useState } from "react";
import FrankApe from "images/frank-ape.jpg";
import Login from "./Login";
import {
  Container,
  ImageContainer,
  Image,
  FormContainer,
  FormTitle,
  Form,
  Error,
  ErrorEmail,
  ATag,
} from "./styles";

const RsvpForm = () => {
  const [rsvp, setRsvp] = useState({
    name: "alex bonine",
    alternate: "shawna carney",
    type: "friend",
    count: 2,
    id: "295526196351861251",
  });
  const [errorCode, setErrorCode] = useState("");

  return (
    <Container>
      <ImageContainer>
        <Image src={FrankApe} />
      </ImageContainer>
      <FormContainer>
        <FormTitle>RSVP</FormTitle>
        <Form>
          {rsvp ? (
            <>
              <div>You made it this far??</div>
            </>
          ) : (
            <Login setErrorCode={setErrorCode} setRsvp={setRsvp} />
          )}
          {errorCode && (
            <>
              <Error>Sorry but it looks like Alex screwed up...again.</Error>
              <ErrorEmail>
                Please let us know by&nbsp;
                <ATag
                  target="_blank"
                  rel="noreferrer"
                  href={`mailto:alexandshawna91821@gmail.com?subject=Issue RSVPing&body=Error code: ${errorCode}`}
                >
                  emailing us
                </ATag>
                &nbsp; with the error:&nbsp;{errorCode}.
              </ErrorEmail>
            </>
          )}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default RsvpForm;
