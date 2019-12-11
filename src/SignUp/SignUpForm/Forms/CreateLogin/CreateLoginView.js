import React from "react";
import SignUpFormTextField from "../../SignUpFormTextField";
import SignUpFormFieldsContainer from "../../SignUpFormFieldsContainer";
import { validateEmail } from "./helpers";
import { validatePassword } from "./helpers";

const CreateLoginView = props => {
  const { open, onUpdate } = props;
  const [emailValid, setEmailValid] = React.useState(false);
  const [passwordValid, setPasswordValid] = React.useState(false);

  React.useEffect(() => {
    onUpdate(emailValid && passwordValid);
  }, [emailValid, onUpdate, passwordValid]);
  return (
    <SignUpFormFieldsContainer open={open}>
      <SignUpFormTextField
        dataTestId="email-field"
        validation={validateEmail}
        label={"Email"}
        errorText="Invalid email"
        onValidationUpdate={valid => {
          setEmailValid(valid);
        }}
      />
      <SignUpFormTextField
        dataTestId="password-field"
        validation={validatePassword}
        label={"Password"}
        errorText="Password must be at least 4 characters long"
        onValidationUpdate={valid => setPasswordValid(valid)}
      />
    </SignUpFormFieldsContainer>
  );
};

export default CreateLoginView;
