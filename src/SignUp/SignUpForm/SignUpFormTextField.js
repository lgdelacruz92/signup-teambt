import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    textField: {
      marginTop: "0.8em"
    }
  };
});

const SignUpFormTextField = props => {
  const { label, errorText } = props;
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
      onChange={() => {}}
    />
  );
};

export default SignUpFormTextField;
