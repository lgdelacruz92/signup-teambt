import React from "react";
import * as MUI from "@material-ui/core";

const FormControlsCreateLoginForward = props => {
  const { onClick } = props;
  return (
    <MUI.Button onClick={() => onClick()} variant="contained" color="primary">
      SIGN UP
    </MUI.Button>
  );
};

export default FormControlsCreateLoginForward;
