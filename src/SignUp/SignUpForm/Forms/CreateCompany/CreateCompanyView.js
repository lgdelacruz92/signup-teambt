import React from "react";
import SignUpFormTextField from "../../SignUpFormTextField";
import SignUpFormFieldsContainer from "../../SignUpFormFieldsContainer";
import { validateGeneral } from "../helpers";

const CreateCompanyView = props => {
  const { open, onUpdate } = props;
  const [validFirstName, setValidFirstName] = React.useState(false);
  const [validLastName, setValidLastName] = React.useState(false);
  const [validCompanyName, setValidCompanyName] = React.useState(false);
  const [validWebsite, setValidWebsite] = React.useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = React.useState(false);

  React.useEffect(() => {
    if (onUpdate) {
      onUpdate(
        validFirstName &&
          validLastName &&
          validCompanyName &&
          validWebsite &&
          validPhoneNumber
      );
    }
  }, [
    validFirstName,
    validLastName,
    validCompanyName,
    validWebsite,
    validPhoneNumber,
    onUpdate
  ]);

  return (
    <SignUpFormFieldsContainer open={open}>
      <SignUpFormTextField
        dataTestId="first-name-field"
        validation={validateGeneral}
        onValidationUpdate={valid => setValidFirstName(valid)}
        label="First Name"
        value=""
      />
      <SignUpFormTextField
        dataTestId="last-name-field"
        validation={validateGeneral}
        onValidationUpdate={valid => setValidLastName(valid)}
        label="Last Name"
        value=""
      />
      <SignUpFormTextField
        dataTestId="company-name-field"
        validation={validateGeneral}
        onValidationUpdate={valid => setValidCompanyName(valid)}
        label="Company Name"
        value=""
      />
      <SignUpFormTextField
        dataTestId="website-field"
        validation={validateGeneral}
        onValidationUpdate={valid => setValidWebsite(valid)}
        label="Website"
        value=""
      />
      <SignUpFormTextField
        dataTestId="phone-number-field"
        validation={validateGeneral}
        onValidationUpdate={valid => setValidPhoneNumber(valid)}
        label="Phone Number"
        value=""
      />
    </SignUpFormFieldsContainer>
  );
};

export default CreateCompanyView;
