import React from "react";
import * as MUI from '@material-ui/core';

const useStyles = MUI.makeStyles(theme => {
  return {
    textField: {
      marginTop: '0.8em'
    }
  }
})



const CreateLoginView = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MUI.Typography align="center" variant="h4">Sign Up</MUI.Typography>
      <MUI.TextField className={classes.textField} fullWidth variant="outlined" label="Email"/>
      <MUI.TextField className={classes.textField} fullWidth variant="outlined" label="Password"/>
    </React.Fragment>
  );
};

export default CreateLoginView;
