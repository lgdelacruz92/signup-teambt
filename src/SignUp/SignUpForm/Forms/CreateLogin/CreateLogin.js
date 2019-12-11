import React from "react";
import CreateLoginView from "./CreateLoginView";

const CreateLogin = props => {
  const { open, onUpdate } = props;
  return <CreateLoginView open={open} onUpdate={onUpdate} />;
};

export default CreateLogin;
