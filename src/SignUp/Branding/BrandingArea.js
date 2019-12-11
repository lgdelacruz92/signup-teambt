import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    branding: {
      flex: 1,
      background: "grey",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }
  };
});

const BrandingArea = props => {
  const classes = useStyles();
  const { children } = props;
  return <div className={classes.branding}>{children}</div>;
};

export default BrandingArea;
