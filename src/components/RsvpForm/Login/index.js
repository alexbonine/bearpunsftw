import React, { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { getRsvp } from "utils/rsvp";
import Input from "components/Input";
import { Error } from "../styles";
import { Button, Title } from "./styles";

const ERROR_THRESHOLD = 3;

const RsvpFormLogin = ({ setErrorCode, setLoading, setNextState, setRsvp }) => {
  const [error, setError] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  const firstRef = useRef();
  const lastRef = useRef();

  const setErrorStatus = useCallback(
    (code) => {
      const nextErrorCount = errorCount + 1;
      setErrorCount(nextErrorCount);
      setDisableButton(false);

      if (nextErrorCount >= ERROR_THRESHOLD) {
        setErrorCode(code);
      }
    },
    [errorCount, setDisableButton, setErrorCode, setErrorCount]
  );

  const onGet = useCallback(
    async (event) => {
      event.preventDefault();
      event.stopPropagation();

      const first = firstRef.current.value.trim();
      const last = lastRef.current.value.trim();

      if (!first || !last) {
        setError("C'mon, do better!");
        return;
      }

      setLoading(true);
      setDisableButton(true);
      setError("");
      setErrorCode("");

      const rsvpObj = await getRsvp(first, last);

      if (!rsvpObj) {
        setErrorStatus("bear-1");
        setLoading(false);
        return;
      } else if (rsvpObj.errorCode) {
        setErrorStatus(rsvpObj.errorCode);
        setLoading(false);
        return;
      } else if (rsvpObj.error) {
        setErrorStatus("bear-2");
        setLoading(false);
        return;
      }

      setRsvp(rsvpObj);
      setNextState();
    },
    [
      firstRef,
      lastRef,
      setDisableButton,
      setError,
      setErrorCode,
      setErrorStatus,
      setLoading,
      setRsvp,
      setNextState,
    ]
  );

  const onKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onGet(event);
      }
    },
    [onGet]
  );

  useEffect(() => {
    console.log("run");
    window.removeEventListener("keydown", onKeyPress);
    window.addEventListener("keydown", onKeyPress);

    return () => window.removeEventListener("keydown", onKeyPress);
  }, [onKeyPress]);

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
  setLoading: PropTypes.func.isRequired,
  setNextState: PropTypes.func.isRequired,
  setRsvp: PropTypes.func.isRequired,
};

export default RsvpFormLogin;
