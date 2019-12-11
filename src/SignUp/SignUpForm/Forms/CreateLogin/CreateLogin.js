import React from "react";
import CreateLoginView from "./CreateLoginView";

const CreateLogin = props => {
  const { open, onUpdate, setFormState } = props;
  return (
    <CreateLoginView
      open={open}
      setFormState={setFormState}
      onUpdate={onUpdate}
    />
  );
};

export default CreateLogin;
