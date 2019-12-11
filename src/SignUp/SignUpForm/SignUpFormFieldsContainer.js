import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpFormFieldsContainer: {
      height: 350,
      visibility: props => props.open ? 'visible' : 'hidden'
    }    
  }
})


const SignUpFormFieldsContainer = props => {
  const {children, open} = props;
  const classes = useStyles({open});
  return (
    <div className={classes.signUpFormFieldsContainer}>
      { children }
    </div>
  );
};

export default SignUpFormFieldsContainer;
