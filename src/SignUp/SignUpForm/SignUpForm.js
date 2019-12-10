import React from "react";
import SignUpFormArea from './SignUpFormArea'
import SignUpFormContainer from "./SignUpFormContainer";
import * as MUI from '@material-ui/core';
import CreateLogin from "./CreateLogin";



const SignUpForm = props => {
  return (
    <SignUpFormArea>
      <SignUpFormContainer>
        <CreateLogin/>
      </SignUpFormContainer>
    </SignUpFormArea>
  );
};

export default SignUpForm;
