import React from "react";
import SignUpFlexArea from "../SignUpFlexArea";
import SignUpFormContainer from "./SignUpFormContainer";
import SignUpFormTitle from "./SignUpFormTitle";
import FormControls from "./FormControls";
import Forms from "./Forms";

const SignUpForm = props => {
  const { onSignUp } = props;
  const [formState, setFormState] = React.useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    companyName: "",
    website: "",
    phoneNumber: ""
  });
  const [currentForm, setCurrentForm] = React.useState("CreateLogin");
  const [createLoginValid, setCreateLoginValid] = React.useState(false);
  const [createCompanyValid, setCreateCompanyValid] = React.useState(false);
  return (
    <SignUpFlexArea>
      <SignUpFormContainer>
        <SignUpFormTitle />
        <Forms
          formState={formState}
          currentForm={currentForm}
          onUpdate={(createLoginValid, createCompanyValid) => {
            setCreateLoginValid(createLoginValid);
            setCreateCompanyValid(createCompanyValid);
          }}
          setFormState={setFormState}
        />
        <FormControls
          currentForm={currentForm}
          nextDisabled={!createLoginValid}
          signUpDisabled={!createCompanyValid}
          onNextClick={forwardForm => setCurrentForm(forwardForm)}
          onSignUpClick={() => onSignUp(formState)}
          onBack={backForm => setCurrentForm(backForm)}
        />
      </SignUpFormContainer>
    </SignUpFlexArea>
  );
};

export default SignUpForm;
