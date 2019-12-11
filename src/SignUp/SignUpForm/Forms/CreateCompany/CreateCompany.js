import React from "react";
import CreateCompanyView from './CreateCompanyView';

const CreateCompany = props => {
  const { open } = props;
  return (
    <CreateCompanyView open={open}/>
  );
};

export default CreateCompany;
