import React from "react";
import SignUpFormArea from './SignUpFormArea'
import SignUpFormContainer from "./SignUpFormContainer";
import SignUpFormTitle from './SignUpFormTitle'
import FormControls from "./FormControls";
import Forms from './Forms'



const SignUpForm = props => {
  const [state, setState] = React.useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    companyName: '',
    website: '',
    phoneNumber: ''
  });
  return (
    <SignUpFormArea>
      <SignUpFormContainer>
        <SignUpFormTitle />
        <Forms state={state} />
        <FormControls />
      </SignUpFormContainer>
    </SignUpFormArea>
  );
};

export default SignUpForm;
