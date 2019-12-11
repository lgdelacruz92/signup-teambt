import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpFlexArea: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };
});

const SignUpFlexArea = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.signUpFlexArea}>{children}</div>;
};

export default SignUpFlexArea;
