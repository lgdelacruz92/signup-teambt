import React from "react";
import * as MUI from "@material-ui/core";

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
  const { onForward, onBack, currentForm } = props;

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
      <MUI.Button
        onClick={() => {
          if (currentForm === "CreateLogin") {
            onForward("CreateCompany");
          }
        }}
        variant="contained"
        color="primary"
      >
        {currentForm === "CreateCompany" ? "SIGN UP" : "NEXT"}
      </MUI.Button>
    </div>
  );
};

export default FormControlsView;
