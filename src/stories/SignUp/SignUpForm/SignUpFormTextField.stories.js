import React from "react";
import SignUpFormTextField from "SignUp/SignUpForm/SignUpFormTextField";

export default { title: "SignUpFormTextField" };
export const signUpFormTextField = () => (
  <SignUpFormTextField
    label="Test Field"
    validation={() => {}}
    errorText="Please enter a valid value"
  />
);
