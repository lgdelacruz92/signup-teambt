import React from "react";
import * as MUI from "@material-ui/core";
import MUIPhoneNumber from "material-ui-phone-number";

const useStyles = MUI.makeStyles(theme => {
  return {
    signUpFormPhoneField: {
      marginTop: "0.8em"
    }
  };
});

const SignUpFormPhoneField = props => {
  const classes = useStyles();
  const { onChange } = props;
  return (
    <MUIPhoneNumber
      dataTestId="phone-number-field"
      label="Phone Number"
      variant="outlined"
      defaultCountry={"us"}
      className={classes.signUpFormPhoneField}
      fullWidth
      onChange={onChange}
    />
  );
};

export default SignUpFormPhoneField;
