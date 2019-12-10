import React from "react";
import * as MUI from '@material-ui/core';

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpContainer: {
      display: 'flex'
    }
  }
})


const SignUpContainer = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <div className={classes.signUpContainer}>{children}</div>
  );
};

export default SignUpContainer;

