import React from "react";
import * as MUI from "@material-ui/core";
import * as MUIIcons from "@material-ui/icons";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpBackButtonView: {
      border: `1px solid ${theme.palette.primary.main}`
    }
  };
});

const SignUpBackButtonView = props => {
  const { onClick } = props;
  const classes = useStyles();
  return (
    <div data-testid="back-button">
      <MUI.IconButton
        onClick={onClick}
        className={classes.signUpBackButtonView}
        color="primary"
      >
        <MUIIcons.ChevronLeft />
      </MUI.IconButton>
    </div>
  );
};

export default SignUpBackButtonView;
