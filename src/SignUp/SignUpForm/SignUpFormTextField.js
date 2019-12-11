import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    textField: {
      marginTop: '0.8em'
    }
  }
})


const SignUpFormTextField = props => {
  const { label } = props;
  const classes = useStyles();
  return (
    <MUI.TextField className={classes.textField} fullWidth variant="outlined" label={label}/>
  );
};

export default SignUpFormTextField;
