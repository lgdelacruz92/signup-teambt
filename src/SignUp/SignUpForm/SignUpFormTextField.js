import React from "react";
import * as MUI from "@material-ui/core";
import { onTextChange } from "./helpers";

const useStyles = MUI.makeStyles(theme => {
  return {
    textField: {
      marginTop: "0.8em"
    }
  };
});

const SignUpFormTextField = props => {
  const { label, validation, errorText } = props;
  const [error, setError] = React.useState(false);
  const classes = useStyles();
  return (
    <MUI.TextField
      error={error}
      helperText={error ? errorText : ""}
      className={classes.textField}
      fullWidth
      variant="outlined"
      label={label}
      onChange={e =>
        onTextChange({ text: e.currentTarget.value, validation, setError })
      }
    />
  );
};

export default SignUpFormTextField;
