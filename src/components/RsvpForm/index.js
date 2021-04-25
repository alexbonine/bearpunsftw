import React, { useRef, useState } from "react";
import FrankApe from "images/frank-ape.jpg";
import LoadingIndicator from "components/LoadingIndicator";
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

const setupSetNextState = (nextState, setNextState) => (notAttending = false) =>
  setNextState(notAttending ? STATES.DONE_NO : nextState);

const getFormComponent = ({
  rsvp,
  setErrorCode,
  setLoading,
  setRsvp,
  setNextState,
  state,
  titleRef,
}) => {
  switch (state) {
    case STATES.EVENTS:
      return (
        <Events
          rsvp={rsvp}
          setErrorCode={setErrorCode}
          setLoading={setLoading}
          setNextState={setupSetNextState(STATES.DONE_YES, setNextState)}
          setRsvp={setRsvp}
          titleRef={titleRef}
        />
      );
    case STATES.DONE_NO:
    case STATES.DONE_YES:
      return (
        <Done
          notAttending={state === STATES.DONE_NO}
          rsvp={rsvp}
          titleRef={titleRef}
        />
      );
    case STATES.LOGIN:
    default:
      return (
        <Login
          setErrorCode={setErrorCode}
          setLoading={setLoading}
          setRsvp={setRsvp}
          setNextState={setupSetNextState(STATES.EVENTS, setNextState)}
        />
      );
  }
};

const RsvpForm = () => {
  const [state, setState] = useState(STATES.LOGIN);
  const [rsvp, setRsvp] = useState();
  const [errorCode, setErrorCode] = useState("");
  const [loading, setLoading] = useState(false);
  const titleRef = useRef();

  const setNextState = (value) => {
    setState(value);
    setLoading(false);
  };

  return (
    <Container>
      <ImageContainer>
        <a href="https://frankape.com/pages/frank-ape" target="blank">
          <Image src={FrankApe} />
        </a>
      </ImageContainer>
      <FormContainer>
        {loading && <LoadingIndicator />}
        <FormTitle ref={titleRef}>RSVP</FormTitle>
        <Form large={state === STATES.EVENTS}>
          {getFormComponent({
            rsvp,
            setErrorCode,
            setLoading,
            setNextState,
            setRsvp,
            state,
            titleRef,
          })}
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
