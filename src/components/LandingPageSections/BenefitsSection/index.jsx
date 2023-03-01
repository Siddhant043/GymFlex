import { Grid, Box } from "@mui/material";
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
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Tilt from "react-parallax-tilt";

const BenefitsSection = () => {
  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems="center"
      mt={18}
      id="benefits-section"
    >
      <Grid item>
        <SectionTitle>Benefits</SectionTitle>
      </Grid>
      <ParentGrid
        item
        container
        rowGap={8}
        columnGap={{ xs: 1, md: 8 }}
        justifyContent="center"
      >
        <BackgroundStyles src={BackgroundImage} alt="" />
        {benefitsData.map((item, idx) => (
          <Grid
            item
            container
            alignItems={"center"}
            justifyContent={"center"}
            lg={3}
          >
            <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12}>
              <BenefitItem key={idx} container item spacing={2}>
                <ParallaxProvider>
                  <Parallax scale={[0.75, 1]} speed={5}>
                    <Box textAlign={"center"}>
                      <img src={item.image} alt={`benefits_${idx}`} />
                      <ItemHeading>{item.heading}</ItemHeading>
                      <ItemSubHeading>{item.subHeading}</ItemSubHeading>
                    </Box>
                  </Parallax>
                </ParallaxProvider>
              </BenefitItem>
            </Tilt>
          </Grid>
        ))}
      </ParentGrid>
    </Grid>
  );
};

export default BenefitsSection;
