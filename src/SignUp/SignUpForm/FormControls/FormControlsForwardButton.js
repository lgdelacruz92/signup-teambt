import React from "react";
import FormControlsCreateLoginForward from "./FormControlsCreateLoginForward";
import FormControlsCreateCompanyForward from "./FormControlsCreateCompanyForward";
const FormControlsForwardButton = props => {
  const { currentForm, onNextClick, onSignUpClick } = props;

  if (currentForm === "CreateLogin") {
    return <FormControlsCreateLoginForward onClick={onNextClick} />;
  } else if (currentForm === "CreateCompany") {
    return <FormControlsCreateCompanyForward onClick={onSignUpClick} />;
  } else {
    return null;
  }
};

export default FormControlsForwardButton;
