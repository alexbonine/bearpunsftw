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
  const [state, setState] = useState(STATES.LOGIN);
  const [rsvp, setRsvp] = useState(null);
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
