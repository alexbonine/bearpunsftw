import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { getRsvp } from "utils/rsvp";
import Input from "components/Input";
import { Error } from "../styles";
import { Button, Title } from "./styles";

const ERROR_THRESHOLD = 3;

const RsvpFormLogin = ({ setErrorCode, setNextState, setRsvp }) => {
  const [error, setError] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const firstRef = useRef();
  const lastRef = useRef();

  const setErrorStatus = (code) => {
    const nextErrorCount = errorCount + 1;
    setErrorCount(nextErrorCount);
    setDisableButton(false);

    if (nextErrorCount >= ERROR_THRESHOLD) {
      setErrorCode(code);
    }
  };

  const onGet = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const first = firstRef.current.value.trim();
    const last = lastRef.current.value.trim();

    if (!first || !last) {
      setError("C'mon, do better!");
      return;
    }

    setDisableButton(true);
    setError("");
    setErrorCode("");

    const rsvpObj = await getRsvp(first, last);

    if (!rsvpObj) {
      setErrorStatus("bear-1");
      return;
    } else if (rsvpObj.errorCode) {
      setErrorStatus(rsvpObj.errorCode);
      return;
    } else if (rsvpObj.error) {
      setErrorStatus("bear-2");
      return;
    }

    setRsvp(rsvpObj);
    setNextState();
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      onGet(event);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onKeyPress);

    return () => window.removeEventListener("keydown", onKeyPress);
  }, []);

  return (
    <>
      <Title>Let's start with your name!</Title>
      <Input ref={firstRef} name="first" placeholder="First" />
      <Input ref={lastRef} name="last" placeholder="Last" />
      <Button onClick={disableButton ? undefined : onGet}>Submit</Button>
      {error && <Error>{error}</Error>}
      {errorCount > 0 && errorCount < ERROR_THRESHOLD && (
        <Error>
          Looks like we're having trouble finding you in the system. Please try
          both youself or an expected parter. Also please try any informal
          versions of your name (i.e., Alex instead of Alexander).
        </Error>
      )}
    </>
  );
};

RsvpFormLogin.propTypes = {
  setErrorCode: PropTypes.func.isRequired,
  setNextState: PropTypes.func.isRequired,
  setRsvp: PropTypes.func.isRequired,
};

export default RsvpFormLogin;
