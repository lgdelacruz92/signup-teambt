import React from "react";
import SignUpFormTextField from "../../SignUpFormTextField";
import SignUpFormFieldsContainer from "../../SignUpFormFieldsContainer";
import { validateEmail } from "./helpers";
import { validatePassword } from "./helpers";

const CreateLoginView = props => {
  const { open } = props;
  return (
    <SignUpFormFieldsContainer open={open}>
      <SignUpFormTextField
        validation={validateEmail}
        label={"Email"}
        errorText="Invalid email"
      />
      <SignUpFormTextField
        validation={validatePassword}
        label={"Password"}
        errorText="Password must be at least 4 characters long"
      />
    </SignUpFormFieldsContainer>
  );
};

export default CreateLoginView;
