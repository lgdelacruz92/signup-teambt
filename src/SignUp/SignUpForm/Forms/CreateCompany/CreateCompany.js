import React from "react";
import CreateCompanyView from "./CreateCompanyView";

const CreateCompany = props => {
  const { open, onUpdate, formState, setFormState } = props;
  return (
    <CreateCompanyView
      formState={formState}
      setFormState={setFormState}
      open={open}
      onUpdate={onUpdate}
    />
  );
};

export default CreateCompany;
