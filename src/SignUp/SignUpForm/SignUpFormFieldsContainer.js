import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpFormFieldsContainer: {
      height: 350
    }    
  }
})


const SignUpFormFieldsContainer = props => {
  const classes = useStyles();
  const {children} = props;
  return (
    <div className={classes.signUpFormFieldsContainer}>
      { children }
    </div>
  );
};

export default SignUpFormFieldsContainer;
