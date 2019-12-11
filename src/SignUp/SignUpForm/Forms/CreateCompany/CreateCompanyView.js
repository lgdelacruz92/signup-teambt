import React from "react";
import SignUpFormTextField from "../../SignUpFormTextField";
import SignUpFormFieldsContainer from "../../SignUpFormFieldsContainer";

const CreateCompanyView = props => {
  const { open } = props;
  return (
    <SignUpFormFieldsContainer open={open}>
      <SignUpFormTextField validation={() => {}} label="First Name" />
      <SignUpFormTextField validation={() => {}} label="Last Name" />
      <SignUpFormTextField validation={() => {}} label="Company Name" />
      <SignUpFormTextField validation={() => {}} label="Website" />
      <SignUpFormTextField validation={() => {}} label="Phone Number" />
    </SignUpFormFieldsContainer>
  );
};

export default CreateCompanyView;
