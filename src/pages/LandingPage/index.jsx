import { Grid } from "@mui/material";
import React from "react";
import BenefitsSection from "../../components/LandingPageSections/BenefitsSection";
import FeaturesSection from "../../components/LandingPageSections/FeaturesSection";
import HeroSection from "../../components/LandingPageSections/HeroSection";

const LandingPage = () => {
  return (
    <Grid container px={{ xs: 1, md: 4, lg: 8 }}>
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
    </Grid>
  );
};

export default LandingPage;
