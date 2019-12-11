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
  const { currentForm, formState, setFormState, onUpdate } = props;
  const classes = useStyles();
  const [createLoginValid, setCreateLoginValid] = React.useState(false);
  const [createCompanyValid, setCreateCompanyValid] = React.useState(false);

  React.useEffect(() => {
    if (onUpdate) onUpdate(createCompanyValid, createCompanyValid);
  }, [createLoginValid, createCompanyValid, onUpdate]);
  return (
    <div className={classes.formsContainer}>
      <CreateLogin
        open={currentForm === "CreateLogin"}
        formState={formState}
        setFormState={setFormState}
        onUpdate={valid => setCreateLoginValid(valid)}
      />
      <CreateCompany
        open={currentForm === "CreateCompany"}
        formState={formState}
        setFormState={setFormState}
        onUpdate={valid => setCreateCompanyValid(valid)}
      />
    </div>
  );
};

export default Forms;
