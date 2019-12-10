import React from "react";
import SignUpFormArea from './SignUpFormArea'
import SignUpFormContainer from "./SignUpFormContainer";
import * as MUI from '@material-ui/core';

const useStyles = MUI.makeStyles(theme => {
  return {

  }
})


const SignUpForm = props => {
  return (
    <SignUpFormArea>
      <SignUpFormContainer>
      </SignUpFormContainer>
    </SignUpFormArea>
  );
};

export default SignUpForm;
