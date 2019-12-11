import React from "react";
import * as MUI from "@material-ui/core";

const useStyles = MUI.makeStyles(theme => {
  return {
    brandingTexts: {
      marginTop: "1.5em"
    }
  };
});

const BrandingTexts = props => {
  const classes = useStyles();
  return (
    <MUI.Typography className={classes.brandingTexts} align="center">
      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
      for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
      Bonorum et Malorum" by Cicero are also reproduced in their exact original
      form, accompanied by English versions from the 1914 translation by H.
      Rackham.
    </MUI.Typography>
  );
};

export default BrandingTexts;
