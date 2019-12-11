import React from "react";
import SignUpFormArea from './SignUpFormArea'
import SignUpFormContainer from "./SignUpFormContainer";
import SignUpFormTitle from './SignUpFormTitle'
import FormControls from "./FormControls";
import Forms from './Forms'

const SignUpForm = props => {
  const [formState, setFormState] = React.useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    companyName: '',
    website: '',
    phoneNumber: ''
  });
  const [currentForm, setCurrentForm] = React.useState('CreateLogin');
  return (
    <SignUpFormArea>
      <SignUpFormContainer>
        <SignUpFormTitle />
        <Forms 
          formState={formState} 
          setFormState={setFormState} 
          currentForm={currentForm}/>
        <FormControls 
          currentForm={currentForm}
          onForward={forwardForm => setCurrentForm(forwardForm)} 
          onBack={backForm => setCurrentForm(backForm)}/>
      </SignUpFormContainer>
    </SignUpFormArea>
  );
};

export default SignUpForm;
