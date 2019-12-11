import React from "react";
import SignUpFlexArea from "../SignUpFlexArea";
import BrandingContainer from "./BrandingContainer";
import BrandingTitle from "./BrandingTitle";
import BrandingTexts from "./BrandingTexts";

const Branding = props => {
  return (
    <SignUpFlexArea>
      <BrandingContainer>
        <BrandingTitle />
        <BrandingTexts />
      </BrandingContainer>
    </SignUpFlexArea>
  );
};

export default Branding;
