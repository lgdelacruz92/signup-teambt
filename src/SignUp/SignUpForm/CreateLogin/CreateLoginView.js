import React from "react";
import SignUpFormTextField from "../SignUpFormTextField";
import SignUpFormFieldsContainer from "../SignUpFormFieldsContainer";


const CreateLoginView = props => {
  return (
    <SignUpFormFieldsContainer>
      <SignUpFormTextField label={"Email"}/>
      <SignUpFormTextField label={"Password"}/>
    </SignUpFormFieldsContainer>
  );
};

export default CreateLoginView;
