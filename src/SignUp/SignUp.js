import React from "react";
import SignUpContainer from "./SignUpContainer";
import Branding from "./Branding";
import SignUpForm from "./SignUpForm";
import SignUpHeader from "./SignUpHeader";
import SignUpBackButton from "./SignUpBackButton";

const SignUp = props => {
  const { onBackClick, onSignUp } = props;
  return (
    <React.Fragment>
      <SignUpHeader>
        <SignUpBackButton onClick={onBackClick} />
      </SignUpHeader>
      <SignUpContainer>
        <Branding />
        <SignUpForm onSignUp={onSignUp} />
      </SignUpContainer>
    </React.Fragment>
  );
};

export default SignUp;
