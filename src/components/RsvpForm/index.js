import React, { useState } from "react";
import FrankApe from "images/frank-ape.jpg";
import Login from "./Login";
import Events from "./Events";
import {
  Container,
  ImageContainer,
  Image,
  FormContainer,
  FormTitle,
  Form,
  ErrorContainer,
  Error,
  ErrorEmail,
  ATag,
} from "./styles";

const STATES = {
  LOGIN: "login",
  EVENTS: "events",
  DONE: "done",
};

const setupSetNextState = (nextState, setState) => () => setState(nextState);

const getFormComponent = ({ rsvp, setErrorCode, setRsvp, setState, state }) => {
  switch (state) {
    case STATES.EVENTS:
      return (
        <Events
          rsvp={rsvp}
          setErrorCode={setErrorCode}
          setNextState={setupSetNextState(STATES.DONE, setState)}
        />
      );
    case STATES.DONE:
      return <div>Done</div>;
    case STATES.LOGIN:
    default:
      return (
        <Login
          setErrorCode={setErrorCode}
          setRsvp={setRsvp}
          setNextState={setupSetNextState(STATES.LOGIN, setState)}
        />
      );
  }
};

const RsvpForm = () => {
  const [state, setState] = useState(STATES.EVENTS);
  const [rsvp, setRsvp] = useState({
    first: "Alex",
    last: "Bonine",
    partnerFirst: "Shawna",
    partnerLast: "Carney",
    type: "family-pizza",
    count: 2,
    id: "295526196351861251",
    userKey: "name",
  });
  const [errorCode, setErrorCode] = useState("");

  return (
    <Container>
      <ImageContainer>
        <Image src={FrankApe} />
      </ImageContainer>
      <FormContainer>
        <FormTitle>RSVP</FormTitle>
        <Form large={state === STATES.EVENTS}>
          {getFormComponent({ rsvp, setErrorCode, setState, setRsvp, state })}
          {errorCode && (
            <ErrorContainer>
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
            </ErrorContainer>
          )}
        </Form>
      </FormContainer>
    </Container>
  );
};

export default RsvpForm;
