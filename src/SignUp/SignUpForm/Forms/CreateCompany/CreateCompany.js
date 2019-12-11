import React from "react";
import CreateCompanyView from "./CreateCompanyView";

const CreateCompany = props => {
  const { open, onUpdate } = props;
  return <CreateCompanyView open={open} onUpdate={onUpdate} />;
};

export default CreateCompany;
