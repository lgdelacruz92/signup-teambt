import React from "react";
import SignUpFormTextField from "../../SignUpFormTextField";
import SignUpFormFieldsContainer from "../../SignUpFormFieldsContainer";

const CreateCompanyView = props => {
  const { open } = props;
  return (
    <SignUpFormFieldsContainer open={open}>
      <SignUpFormTextField label="First Name"/>
      <SignUpFormTextField label="Last Name"/>
      <SignUpFormTextField label="Company Name"/>
      <SignUpFormTextField label="Website"/>
      <SignUpFormTextField label="Phone Number"/>
    </SignUpFormFieldsContainer>
  );
};

export default CreateCompanyView;
