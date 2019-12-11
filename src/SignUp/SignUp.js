import React from "react";
import SignUpContainer from "./SignUpContainer";
import Branding from "./Branding";
import SignUpForm from "./SignUpForm";
import SignUpHeader from "./SignUpHeader";
import SignUpBackButton from "./SignUpBackButton";
import PropTypes from "prop-types";

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

SignUp.propTypes = {
  onBackClick: PropTypes.func.isRequired,
  onSignUp: PropTypes.func.isRequired
};

export default SignUp;
