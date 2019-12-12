import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpErrorMessage: {
      color: "red"
    }
  };
});

const SignUpFormErrorMessage = props => {
  const classes = useStyles();
  const { children } = props;
  return (
    <MUI.Typography
      align="center"
      variant="body1"
      className={classes.signUpErrorMessage}
    >
      {children}
    </MUI.Typography>
  );
};

export default SignUpFormErrorMessage;
