import React from "react";
import * as MUI from "@material-ui/core";
import { onTextChange } from "./helpers";
import PropTypes from "prop-types";

const useStyles = MUI.makeStyles(theme => {
  return {
    textField: {
      marginTop: "0.8em"
    }
  };
});

const SignUpFormTextField = props => {
  const { label, validation, errorText, onValidationUpdate } = props;
  const [error, setError] = React.useState(false);
  const [currentValue, setCurrentValue] = React.useState("");
  const classes = useStyles();

  React.useEffect(() => {
    onTextChange({ text: currentValue, validation, setError });
  }, [currentValue, setError, validation]);

  React.useEffect(() => {
    if (onValidationUpdate) {
      onValidationUpdate(!error && currentValue.length > 0);
    }
  }, [currentValue.length, error, onValidationUpdate]);
  return (
    <MUI.TextField
      error={error}
      helperText={error ? errorText : ""}
      className={classes.textField}
      fullWidth
      variant="outlined"
      label={label}
      onChange={e => {
        setCurrentValue(e.currentTarget.value);
      }}
    />
  );
};

SignUpFormTextField.propTypes = {
  validation: PropTypes.func.isRequired
};

export default SignUpFormTextField;
