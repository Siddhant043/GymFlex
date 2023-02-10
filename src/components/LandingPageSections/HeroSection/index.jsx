import { Grid } from "@mui/material";
import React from "react";
import { heroTextData } from "../data";
import { MainHeading, StyledDivider, SubHeading } from "./styles";
import CommonButton from "../../CommonButton";

const HeroSection = () => {
  return (
    <Grid container alignItems={"center"} justifyContent="center">
      <Grid
        container
        item
        flexDirection={"column"}
        alignItems="center"
        rowGap={{ xs: 3, md: 6 }}
        pt={6}
      >
        <Grid item>
          <MainHeading>{heroTextData.heading}</MainHeading>
        </Grid>
        <Grid item>
          <StyledDivider />
        </Grid>
        <Grid item>
          <SubHeading>{heroTextData.subHeading}</SubHeading>
        </Grid>
        <Grid item>
          <CommonButton text={heroTextData.ctaText} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HeroSection;
