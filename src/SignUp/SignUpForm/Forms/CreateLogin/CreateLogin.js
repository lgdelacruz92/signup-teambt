import React from "react";
import CreateLoginView from './CreateLoginView';

const CreateLogin = props => {
  const { open} = props;
  return (
    <CreateLoginView open={open}/>
  );
};

export default CreateLogin;
