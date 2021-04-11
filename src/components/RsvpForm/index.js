import React, { useRef, useState } from "react";
import FrankApe from "images/frank-ape.jpg";
import { getRsvp } from "utils/rsvp";
import {
  Container,
  ImageContainer,
  Image,
  FormContainer,
  FormTitle,
  Form,
  SubFormTitle,
  Input,
  Submit,
  Error,
  ErrorEmail,
  ATag,
} from "./styles";

const ERROR_THRESHOLD = 3;

const RsvpForm = () => {
  const [rsvp, setRsvp] = useState(null);
  const [errorCode, setErrorCode] = useState("");
  const [error, setError] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const firstRef = useRef();
  const lastRef = useRef();

  const onGet = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const first = firstRef.current.value;
    const last = lastRef.current.value;

    if (!first || !last) {
      setError("C'mon, do better!");
      return;
    }

    setError("");
    setErrorCode("");

    const name = `${first} ${last}`;

    const rsvpObj = await getRsvp(name);

    if (!rsvpObj) {
      setErrorCount(errorCount + 1);
      setErrorCode("Bear 1");
      return;
    } else if (rsvpObj.errorCode) {
      setErrorCount(errorCount + 1);
      setErrorCode(rsvpObj.errorCode);
      return;
    } else if (rsvpObj.error) {
      setErrorCount(errorCount + 1);
      setErrorCode("Bear 2");
      return;
    }

    setRsvp(rsvpObj);
  };

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
            <>
              <SubFormTitle>Let's start with your name!</SubFormTitle>
              <Input ref={firstRef} name="first" placeholder="First" />
              <Input ref={lastRef} name="last" placeholder="Last" />
              <Submit onClick={onGet}>Submit</Submit>
            </>
          )}
          {error && <Error>{error}</Error>}
          {errorCount > 0 && errorCount < ERROR_THRESHOLD && (
            <Error>
              Looks like we're having trouble finding you in the system. Please
              try both youself or an expected parter. Also please try any
              informal versions of your name (i.e., Alex instead of Alexander).
            </Error>
          )}
          {errorCount >= ERROR_THRESHOLD && errorCode && (
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
