import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpHeader: {
      width: "100%",
      padding: "1em"
    }
  };
});

const SignUpHeader = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.signUpHeader}>{children}</div>;
};

export default SignUpHeader;
