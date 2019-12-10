import React from "react";
import SignUpContainer from "./SignUpContainer";
import Branding from "./Branding";
import SignUpForm from "./SignUpForm";

const SignUp = props => {
  return (
    <SignUpContainer>
      <Branding />
      <SignUpForm />
    </SignUpContainer>
  );
};

export default SignUp;