import React from "react";
import * as MUI from "@material-ui/core";
import * as MUIIcons from "@material-ui/icons";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpBackButtonView: {}
  };
});

const SignUpBackButtonView = props => {
  const classes = useStyles();
  return (
    <MUI.IconButton>
      <MUIIcons.ChevronLeft />
    </MUI.IconButton>
  );
};

export default SignUpBackButtonView;
