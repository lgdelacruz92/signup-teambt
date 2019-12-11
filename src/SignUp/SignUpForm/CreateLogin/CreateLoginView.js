import React from "react";
import * as MUI from '@material-ui/core';
import SignUpFormTextField from "../SignUpFormTextField";


const CreateLoginView = props => {
  return (
    <React.Fragment>
      <SignUpFormTextField label={"Email"}/>
      <SignUpFormTextField label={"Password"}/>
    </React.Fragment>
  );
};

export default CreateLoginView;
