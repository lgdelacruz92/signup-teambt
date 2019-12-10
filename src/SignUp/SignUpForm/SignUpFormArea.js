import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpFormContainer: {
      flex: 1,
    }
  }
})


const SignupFormArea = props => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.signUpFormContainer}>
      { children }
    </div>
  );
};

export default SignupFormArea;
