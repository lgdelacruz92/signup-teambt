import React from "react";
import * as MUI from '@material-ui/core';

const useStyles = MUI.makeStyles(theme => {
  return {
    branding: {
      flex: 1
    }    
  }
})


const Branding = props => {
  const classes = useStyles();
  return (
    <div className={classes.branding}></div>
  );
};

export default Branding;
