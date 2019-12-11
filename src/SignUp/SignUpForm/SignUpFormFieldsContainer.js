import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpFormFieldsContainer: {
      visibility: props => (props.open ? "visible" : "hidden"),
      opacity: props => (props.open ? 1 : 0),
      position: "absolute",
      top: 0,
      left: 0,
      transition: "visibility 0.3s ease-in, opacity 0.3s ease-in"
    }
  };
});

const SignUpFormFieldsContainer = props => {
  const { children, open } = props;
  const classes = useStyles({ open });
  return <div className={classes.signUpFormFieldsContainer}>{children}</div>;
};

export default SignUpFormFieldsContainer;
