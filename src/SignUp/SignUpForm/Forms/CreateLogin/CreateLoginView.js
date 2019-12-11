import React from "react";
import SignUpFormTextField from "../../SignUpFormTextField";
import SignUpFormFieldsContainer from "../../SignUpFormFieldsContainer";
import { validateEmail } from "./helpers";

const CreateLoginView = props => {
  const { open } = props;
  return (
    <SignUpFormFieldsContainer open={open}>
      <SignUpFormTextField
        validation={validateEmail}
        label={"Email"}
        errorText="Invalid email"
      />
      <SignUpFormTextField label={"Password"} />
    </SignUpFormFieldsContainer>
  );
};

export default CreateLoginView;
