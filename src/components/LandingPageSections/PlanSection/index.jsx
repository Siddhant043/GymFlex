import { Grid, useMediaQuery } from "@mui/material";
import React from "react";
import { planData } from "../data";
import CommonButton from "../../CommonButton";
import {
  MainPrice,
  OriginalPrice,
  PlanItemContainer,
  PlanItem,
  PlanText,
  SectionTitle,
  StyledHeading,
} from "./styles";
import Tilt from "react-parallax-tilt";

const PlanCard = ({ item }) => {
  return (
    <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3}>
      <Grid
        item
        xs={12}
        container
        bgcolor={"#fdfdfd"}
        flexDirection="column"
        justifyContent={"space-between"}
        alignItems={"center"}
        px={2}
        sx={{ borderRadius: "10px", cursor: "pointer" }}
        width={{ xs: "100%", md: "30vw", lg: "28vw" }}
        minHeight={{ xs: "450px", md: "804px" }}
      >
        <Grid item container flexDirection="column" alignItems={"center"}>
          <StyledHeading>{item.planName}</StyledHeading>

          {item.originalPrice && (
            <OriginalPrice>{`₹ ${item.originalPrice}/mo`}</OriginalPrice>
          )}

          <Grid item container flexDirection="column" alignItems={"center"}>
            <MainPrice
              style={{ marginBottom: item.price === "Free" ? "68px" : "0" }}
            >
              {item.price === "Free" ? `${item.price}` : `₹ ${item.price}/mo`}
            </MainPrice>

            {item.price !== "Free" && (
              <h4
                style={{
                  color: "#37474f",
                  fontSize: "16px",
                  fontWeight: "300",
                }}
              >
                Billed anually
              </h4>
            )}
          </Grid>
          <Grid item flexDirection={"column"}>
            <PlanText>This plan includes:</PlanText>
            <PlanItemContainer px={2}>
              {item.features.map((feature, idx) => (
                <PlanItem key={idx}>{`${idx + 1}. ${feature}`}</PlanItem>
              ))}
            </PlanItemContainer>
          </Grid>
        </Grid>
        <Grid item mb={6}>
          <CommonButton text={item.ctaText} />
        </Grid>
      </Grid>
    </Tilt>
  );
};

const PlanSection = () => {
  const below900 = useMediaQuery("(max-width: 900px)");
  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems="center"
      mt={18}
      id="plan-section"
    >
      <Grid item>
        <SectionTitle>Chose you plan</SectionTitle>
      </Grid>
      <Grid
        container
        item
        flexDirection={below900 ? "column" : "row"}
        justifyContent="space-between"
        alignContent={"center"}
        rowGap={below900 ? 8 : 0}
      >
        {planData.map((item, index) => (
          <Grid item key={index}>
            <PlanCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default PlanSection;
