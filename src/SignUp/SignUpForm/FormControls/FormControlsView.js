import React from "react";
import * as MUI from '@material-ui/core';

const useStyles = MUI.makeStyles(theme => {
  return {
    formControlsView: {
      display: 'flex',
      justifyContent: 'space-between'
    }
  }
})


const FormControlsView = props => {
  const classes = useStyles();

  return (
    <div className={classes.formControlsView}>
      <MUI.Button variant="outlined">BACK</MUI.Button>
      <MUI.Button variant="contained" color="primary">NEXT</MUI.Button>
    </div>
  );
};

export default FormControlsView;
