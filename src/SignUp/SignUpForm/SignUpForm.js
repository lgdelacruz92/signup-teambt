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
  return (
    <SignUpFlexArea>
      <SignUpFormContainer>
        <SignUpFormTitle />
        <Forms
          formState={formState}
          setFormState={setFormState}
          currentForm={currentForm}
          onUpdate={valid => {}}
        />
        <FormControls
          currentForm={currentForm}
          onForward={forwardForm => setCurrentForm(forwardForm)}
          onBack={backForm => setCurrentForm(backForm)}
        />
      </SignUpFormContainer>
    </SignUpFlexArea>
  );
};

export default SignUpForm;
