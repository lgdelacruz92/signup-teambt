import React from "react";
import * as MUI from '@material-ui/core';

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpForm: {
      flex: 1
    }    
  }
})


const SignUpForm = props => {
  const classes = useStyles();
  return (
    <div className={classes.signUpForm}></div>
  );
};

export default SignUpForm;
