import React from "react";
import * as MUI from "@material-ui/core";

const SignUpFormContainer = props => {
  const { children } = props;
  return (
    <MUI.Paper elevation={3}>
      {children}
    </MUI.Paper>
  );
};

export default SignUpFormContainer;
