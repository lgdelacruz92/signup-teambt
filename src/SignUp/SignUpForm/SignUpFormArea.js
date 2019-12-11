import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpFormArea: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  }
})


const SignupFormArea = props => {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.signUpFormArea}>
      { children }
    </div>
  );
};

export default SignupFormArea;
