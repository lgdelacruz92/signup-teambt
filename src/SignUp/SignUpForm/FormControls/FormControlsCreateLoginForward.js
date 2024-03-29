import React from "react";
import * as MUI from "@material-ui/core";

const FormControlsCreateLoginForward = props => {
  const { onClick, disabled } = props;
  return (
    <MUI.Button
      disabled={disabled}
      onClick={() => {
        onClick("CreateCompany");
      }}
      variant="contained"
      color="primary"
    >
      NEXT
    </MUI.Button>
  );
};

export default FormControlsCreateLoginForward;
