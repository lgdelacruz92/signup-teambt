import React from "react";
import SignUpFormArea from './SignUpFormArea'
import SignUpFormContainer from "./SignUpFormContainer";
import SignUpFormTitle from './SignUpFormTitle'
import CreateCompany from "./CreateCompany";
import FormControls from "./FormControls";



const SignUpForm = props => {
  return (
    <SignUpFormArea>
      <SignUpFormContainer>
        <SignUpFormTitle />
        <CreateCompany/>
        <FormControls />
      </SignUpFormContainer>
    </SignUpFormArea>
  );
};

export default SignUpForm;
