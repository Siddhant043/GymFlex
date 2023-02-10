import { Grid } from "@mui/material";
import React from "react";
import { benefitsData } from "../data";
import BackgroundImage from "../../../assets/benefits-background.svg";
import {
  BackgroundStyles,
  BenefitItem,
  ItemHeading,
  ItemSubHeading,
  ParentGrid,
  SectionTitle,
} from "./styles";

const BenefitsSection = () => {
  return (
    <Grid container flexDirection={"column"} alignItems="center" mt={18}>
      <Grid item>
        <SectionTitle>Benefits</SectionTitle>
      </Grid>
      <ParentGrid
        item
        container
        rowGap={4}
        columnGap={{ xs: 1, md: 4 }}
        justifyContent="center"
      >
        <BackgroundStyles src={BackgroundImage} alt="" />
        {benefitsData.map((item, idx) => (
          <BenefitItem
            key={idx}
            container
            item
            xs={12}
            md={3}
            flexDirection="column"
            alignItems={"center"}
            justifyContent="space-between"
            px={{ xs: 2, md: 2 }}
            py={{ xs: 2, md: 2 }}
          >
            <img src={item.image} alt={`benefits_${idx}`} />

            <ItemHeading>{item.heading}</ItemHeading>

            <ItemSubHeading>{item.subHeading}</ItemSubHeading>
          </BenefitItem>
        ))}
      </ParentGrid>
    </Grid>
  );
};

export default BenefitsSection;
