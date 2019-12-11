import React from "react";
import SignUpContainer from "./SignUpContainer";
import Branding from "./Branding";
import SignUpForm from "./SignUpForm";
import SignUpHeader from "./SignUpHeader";
import SignUpBackButton from "./SignUpBackButton";

const SignUp = props => {
  return (
    <React.Fragment>
      <SignUpHeader>
        <SignUpBackButton />
      </SignUpHeader>
      <SignUpContainer>
        <Branding />
        <SignUpForm />
      </SignUpContainer>
    </React.Fragment>
  );
};

export default SignUp;
