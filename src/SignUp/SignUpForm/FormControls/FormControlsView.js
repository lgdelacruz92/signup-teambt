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
  const {onForward, onBack} = props;

  return (
    <div className={classes.formControlsView}>
      <MUI.Button onClick={onBack} variant="outlined">BACK</MUI.Button>
      <MUI.Button onClick={onForward} variant="contained" color="primary">NEXT</MUI.Button>
    </div>
  );
};

export default FormControlsView;
