import React from "react";
import SignUpFormTextField from "../../SignUpFormTextField";
import SignUpFormFieldsContainer from "../../SignUpFormFieldsContainer";
import SignUpFormPhoneField from "../../SignUpFormPhoneField";
import { validateGeneral } from "../helpers";

const CreateCompanyView = props => {
  const { open, onUpdate, formState, setFormState } = props;
  const [validFirstName, setValidFirstName] = React.useState(false);
  const [validLastName, setValidLastName] = React.useState(false);
  const [validCompanyName, setValidCompanyName] = React.useState(false);
  const [validWebsite, setValidWebsite] = React.useState(false);

  React.useEffect(() => {
    if (onUpdate) {
      onUpdate(
        validFirstName && validLastName && validCompanyName && validWebsite
      );
    }
  }, [validFirstName, validLastName, validCompanyName, validWebsite, onUpdate]);

  return (
    <SignUpFormFieldsContainer open={open}>
      <SignUpFormTextField
        dataTestId="first-name-field"
        validation={validateGeneral}
        onValidationUpdate={valid => setValidFirstName(valid)}
        label="First Name"
        value={formState.firstName}
        onChange={value => setFormState({ ...formState, firstName: value })}
      />
      <SignUpFormTextField
        dataTestId="last-name-field"
        validation={validateGeneral}
        onValidationUpdate={valid => setValidLastName(valid)}
        label="Last Name"
        value={formState.lastName}
        onChange={value => setFormState({ ...formState, lastName: value })}
      />
      <SignUpFormTextField
        dataTestId="company-name-field"
        validation={validateGeneral}
        onValidationUpdate={valid => setValidCompanyName(valid)}
        label="Company Name"
        value={formState.companyName}
        onChange={value => setFormState({ ...formState, companyName: value })}
      />
      <SignUpFormTextField
        dataTestId="website-field"
        validation={validateGeneral}
        onValidationUpdate={valid => setValidWebsite(valid)}
        label="Website"
        value={formState.website}
        onChange={value => setFormState({ ...formState, website: value })}
      />
      <SignUpFormPhoneField
        onChange={value => setFormState({ ...formState, phone: value })}
      />
    </SignUpFormFieldsContainer>
  );
};

export default CreateCompanyView;
