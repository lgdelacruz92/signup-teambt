import React from "react";
import * as MUI from '@material-ui/core';

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpContainer: {
      display: 'flex',
      height: '100%'
    },
    '@media only screen and (max-width: 768px)': {
      signUpContainer: {
        flexDirection: 'column'
      }
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

