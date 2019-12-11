import React from "react";
import SignUpFlexArea from "../SignUpFlexArea";
import SignUpFormContainer from "./SignUpFormContainer";
import SignUpFormTitle from "./SignUpFormTitle";
import FormControls from "./FormControls";
import Forms from "./Forms";

const SignUpForm = props => {
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
          setFormState={setFormState}
          currentForm={currentForm}
          onUpdate={(createLoginValid, createCompanyValid) => {
            setCreateLoginValid(createLoginValid);
            setCreateCompanyValid(createCompanyValid);
          }}
        />
        <FormControls
          currentForm={currentForm}
          nextDisabled={!createLoginValid}
          signUpDisabled={!createCompanyValid}
          onNextClick={forwardForm => setCurrentForm(forwardForm)}
          onSignUpClick={() => {
            console.log("sign up");
          }}
          onBack={backForm => setCurrentForm(backForm)}
        />
      </SignUpFormContainer>
    </SignUpFlexArea>
  );
};

export default SignUpForm;
