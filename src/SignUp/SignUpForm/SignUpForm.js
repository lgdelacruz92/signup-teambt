import React from "react";
import SignUpFormArea from './SignUpFormArea'
import SignUpFormContainer from "./SignUpFormContainer";
import SignUpFormTitle from './SignUpFormTitle'
import CreateCompany from "./CreateCompany";



const SignUpForm = props => {
  return (
    <SignUpFormArea>
      <SignUpFormContainer>
        <SignUpFormTitle />
        <CreateCompany/>
      </SignUpFormContainer>
    </SignUpFormArea>
  );
};

export default SignUpForm;
