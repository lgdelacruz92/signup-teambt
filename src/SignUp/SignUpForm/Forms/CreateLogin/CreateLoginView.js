import React from "react";
import SignUpFormTextField from "../../SignUpFormTextField";
import SignUpFormFieldsContainer from "../../SignUpFormFieldsContainer";

const CreateLoginView = props => {
  const { open } = props;
  return (
    <SignUpFormFieldsContainer open={open}>
      <SignUpFormTextField label={"Email"} />
      <SignUpFormTextField label={"Password"} />
    </SignUpFormFieldsContainer>
  );
};

export default CreateLoginView;
