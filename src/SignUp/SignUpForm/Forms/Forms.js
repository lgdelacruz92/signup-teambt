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
  const { currentForm, onUpdate, formState, setFormState } = props;
  const classes = useStyles();
  const [createLoginValid, setCreateLoginValid] = React.useState(false);
  const [createCompanyValid, setCreateCompanyValid] = React.useState(false);
  React.useEffect(() => {
    if (onUpdate) onUpdate(createLoginValid, createCompanyValid);
  }, [createLoginValid, createCompanyValid, onUpdate]);

  return (
    <div className={classes.formsContainer}>
      <CreateLogin
        open={currentForm === "CreateLogin"}
        onUpdate={valid => setCreateLoginValid(valid)}
        setFormState={setFormState}
        formState={formState}
      />
      <CreateCompany
        open={currentForm === "CreateCompany"}
        onUpdate={valid => setCreateCompanyValid(valid)}
      />
    </div>
  );
};

export default Forms;
