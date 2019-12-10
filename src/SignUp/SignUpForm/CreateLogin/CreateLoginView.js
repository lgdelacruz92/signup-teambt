import React from "react";
import * as MUI from '@material-ui/core';


const CreateLoginView = props => {
  return (
    <React.Fragment>
      <MUI.TextField fullWidth variant="outlined" label="Email"/>
      <MUI.TextField fullWidth variant="outlined" label="Password"/>
    </React.Fragment>
  );
};

export default CreateLoginView;
