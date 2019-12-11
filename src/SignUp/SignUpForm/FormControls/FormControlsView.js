import React from "react";
import * as MUI from "@material-ui/core";
import FormControlsForwardButton from "./FormControlsForwardButton";

const useStyles = MUI.makeStyles(theme => {
  return {
    formControlsView: {
      display: "flex",
      justifyContent: "space-between"
    }
  };
});

const FormControlsView = props => {
  const classes = useStyles();
  const {
    onNextClick,
    onBack,
    currentForm,
    disabledForward,
    onSignUpClick
  } = props;

  return (
    <div className={classes.formControlsView}>
      <MUI.Button
        onClick={() => {
          if (currentForm === "CreateCompany") {
            onBack("CreateLogin");
          }
        }}
        variant="outlined"
      >
        BACK
      </MUI.Button>
      <FormControlsForwardButton
        onNextClick={onNextClick}
        currentForm={currentForm}
        onSignUpClick={onSignUpClick}
      />
    </div>
  );
};

export default FormControlsView;
