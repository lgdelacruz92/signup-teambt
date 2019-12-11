import React from "react";
import CreateLogin from './CreateLogin'
import CreateCompany from './CreateCompany'

const Forms = props => {
  const { currentForm, formState, setFormState} = props;
  return (
    <React.Fragment>
      <CreateLogin open={currentForm=== 'CreateLogin'}  formState={formState} setFormState={setFormState}/>
      <CreateCompany open={currentForm=== 'CreateCompany'} formState={formState} setFormState={setFormState}/>
    </React.Fragment>
  );
};

export default Forms;
