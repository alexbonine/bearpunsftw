import React, { useState } from "react";
import FrankApe from "images/frank-ape.jpg";
import Login from "./Login";
import Events from "./Events";
import Done from "./Done";
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
  DONE_NO: "done-no",
  DONE_YES: "done-yes",
};

const setupSetNextState = (nextState, setState) => (notAttending = false) =>
  setState(notAttending ? STATES.DONE_NO : nextState);

const getFormComponent = ({ rsvp, setErrorCode, setRsvp, setState, state }) => {
  switch (state) {
    case STATES.EVENTS:
      return (
        <Events
          rsvp={rsvp}
          setErrorCode={setErrorCode}
          setNextState={setupSetNextState(STATES.DONE_YES, setState)}
        />
      );
    case STATES.DONE_NO:
    case STATES.DONE_YES:
      return <Done notAttending={state === STATES.DONE_NO} />;
    case STATES.LOGIN:
    default:
      return (
        <Login
          setErrorCode={setErrorCode}
          setRsvp={setRsvp}
          setNextState={setupSetNextState(STATES.EVENTS, setState)}
        />
      );
  }
};

const RsvpForm = () => {
  const [state, setState] = useState(STATES.LOGIN);
  const [rsvp, setRsvp] = useState();
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
