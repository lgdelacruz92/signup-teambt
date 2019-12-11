import React from "react";
import SignUpFormTextField from "SignUp/SignUpForm/SignUpFormTextField";

export default { title: "SignUpFormTextField" };
export const signUpFormTextField = () => (
  <SignUpFormTextField
    label="Test Field"
    validation={newValue => newValue.length > 0}
    errorText="Please enter a valid value"
  />
);

export const signUpFormTextFieldNumberOnly = () => (
  <SignUpFormTextField
    label="Number Only Field"
    validation={() => {}}
    type="number"
  />
);
