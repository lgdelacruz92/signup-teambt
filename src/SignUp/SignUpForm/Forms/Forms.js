import React from "react";
import CreateLogin from "./CreateLogin";
import CreateCompany from "./CreateCompany";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    formsContainer: {
      position: "relative",
      height: 350
    }
  };
});

const Forms = props => {
  const { currentForm, formState, setFormState } = props;
  const classes = useStyles();
  return (
    <div className={classes.formsContainer}>
      <CreateLogin
        open={currentForm === "CreateLogin"}
        formState={formState}
        setFormState={setFormState}
      />
      <CreateCompany
        open={currentForm === "CreateCompany"}
        formState={formState}
        setFormState={setFormState}
      />
    </div>
  );
};

export default Forms;
