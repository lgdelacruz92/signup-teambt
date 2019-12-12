import React from "react";
import * as MUI from "@material-ui/core";
import { onTextChange } from "./helpers";
import PropTypes from "prop-types";

const useStyles = MUI.makeStyles(theme => {
  return {
    textField: {
      marginTop: "0.8em",
      "input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button": {
        "-webkit-appearance": "none",
        margin: 0
      }
    }
  };
});

const SignUpFormTextField = props => {
  const {
    label,
    validation,
    errorText,
    onValidationUpdate,
    type,
    onChange,
    dataTestId,
    value
  } = props;
  const [error, setError] = React.useState(false);
  const classes = useStyles();

  React.useEffect(() => {
    onTextChange({ text: value, validation, setError });
  }, [setError, validation, value]);

  React.useEffect(() => {
    if (onValidationUpdate) {
      onValidationUpdate(!error && value.length > 0);
    }
  }, [error, onValidationUpdate, value]);

  return (
    <MUI.TextField
      error={error}
      type={type}
      helperText={error ? errorText : ""}
      className={classes.textField}
      fullWidth
      variant="outlined"
      label={label}
      onChange={e => {
        onChange(e.target.value);
      }}
      inputProps={{ "data-testid": dataTestId }}
    />
  );
};

SignUpFormTextField.propTypes = {
  validation: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default SignUpFormTextField;
