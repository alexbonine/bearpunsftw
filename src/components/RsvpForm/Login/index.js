import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { getRsvp } from "utils/rsvp";
import Button from "components/Button";
import Input from "components/Input";
import { SubFormTitle, Error } from "./styles";

const ERROR_THRESHOLD = 3;

const RsvpFormLogin = ({ setErrorCode, setRsvp }) => {
  const [error, setError] = useState("");
  const [errorCount, setErrorCount] = useState(0);
  const firstRef = useRef();
  const lastRef = useRef();

  const setErrorStatus = (code) => {
    const nextErrorCount = errorCount + 1;
    setErrorCount(nextErrorCount);

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

    setError("");
    setErrorCode("");

    const name = `${first} ${last}`;

    const rsvpObj = await getRsvp(name);

    if (!rsvpObj) {
      setErrorStatus("Bear 1");
      return;
    } else if (rsvpObj.errorCode) {
      setErrorStatus(rsvpObj.errorCode);
      return;
    } else if (rsvpObj.error) {
      setErrorStatus("Bear 2");
      return;
    }

    setRsvp(rsvpObj);
  };

  return (
    <>
      <SubFormTitle>Let's start with your name!</SubFormTitle>
      <Input ref={firstRef} name="first" placeholder="First" />
      <Input ref={lastRef} name="last" placeholder="Last" />
      <Button onClick={onGet}>Submit</Button>
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
  setRsvp: PropTypes.func.isRequired,
};

export default RsvpFormLogin;
