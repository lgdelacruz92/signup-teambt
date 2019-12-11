import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    brandingContainer: {}
  };
});

const BrandingContainer = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.brandingContainer}>{children}</div>;
};

export default BrandingContainer;
