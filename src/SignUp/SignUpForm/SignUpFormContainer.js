import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpFormContainer: {
      width: '50%',
      padding: '1.5em',
      maxWidth: '450px'
    }
  }
})


const SignUpFormContainer = props => {
  const { children } = props;
  const classes = useStyles();
  return (
    <MUI.Paper className={classes.signUpFormContainer} elevation={3}>
      {children}
    </MUI.Paper>
  );
};

export default SignUpFormContainer;
