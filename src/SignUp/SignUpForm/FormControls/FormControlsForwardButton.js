import React from "react";
import FormControlsCreateLoginForward from "./FormControlsCreateLoginForward";
import FormControlsCreateCompanyForward from "./FormControlsCreateCompanyForward";
const FormControlsForwardButton = props => {
  const {
    currentForm,
    onNextClick,
    onSignUpClick,
    nextDisabled,
    signUpDisabled
  } = props;

  if (currentForm === "CreateLogin") {
    return (
      <FormControlsCreateLoginForward
        onClick={onNextClick}
        disabled={nextDisabled}
      />
    );
  } else if (currentForm === "CreateCompany") {
    return (
      <FormControlsCreateCompanyForward
        onClick={onSignUpClick}
        disabled={signUpDisabled}
      />
    );
  } else {
    return null;
  }
};

export default FormControlsForwardButton;
