import React from "react";
import CreateLoginView from "./CreateLoginView";

const CreateLogin = props => {
  const { open, onUpdate, setFormState, formState } = props;
  return (
    <CreateLoginView
      open={open}
      setFormState={setFormState}
      onUpdate={onUpdate}
      formState={formState}
    />
  );
};

export default CreateLogin;
