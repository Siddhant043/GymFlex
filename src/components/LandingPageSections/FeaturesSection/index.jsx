import { Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { featuresData } from "../data";
import {
  HeadingLeft,
  HeadingRight,
  ItemImage,
  SectionTitle,
  SubHeadingLeft,
  SubHeadingRight,
} from "./styles";

const ImageLeftCard = ({ item }) => {
  const { image, title, subTitle } = item;
  return (
    <Grid
      container
      item
      xs={12}
      flexDirection="row"
      justifyContent={"space-between"}
      alignItems="center"
      px={{ xs: 8, md: 12, lg: 18 }}
      py={4}
    >
      <Grid item xs={6}>
        <ItemImage src={image} alt="" />
      </Grid>
      <Grid container item xs={5} alignItems={"end"} flexDirection={"column"}>
        <Grid item>
          <HeadingRight>{title}</HeadingRight>
        </Grid>
        <Grid item>
          <SubHeadingRight>{subTitle}</SubHeadingRight>
        </Grid>
      </Grid>
    </Grid>
  );
};

const ImageRightCard = ({ item }) => {
  const { image, title, subTitle } = item;
  return (
    <Grid
      container
      item
      xs={12}
      flexDirection="row"
      justifyContent={"space-between"}
      alignItems="center"
      px={{ xs: 8, md: 12, lg: 18 }}
      py={4}
    >
      <Grid container item xs={5} alignItems={"start"} flexDirection={"column"}>
        <Grid item>
          <HeadingLeft>{title}</HeadingLeft>
        </Grid>
        <Grid item>
          <SubHeadingLeft>{subTitle}</SubHeadingLeft>
        </Grid>
      </Grid>
      <Grid item>
        <ItemImage src={image} alt="" />
      </Grid>
    </Grid>
  );
};

const MWebCard = ({ item, index }) => {
  const { image, title, subTitle } = item;

  const fetchGradientColor = () => {
    switch (index.toString()) {
      case "0":
        return "linear-gradient(10deg,#dc293f 1.88%,#5759d8 98.29%)";
      case "1":
        return "linear-gradient(50deg,#23074d 1.88%,#cc5333 98.29%)";
      case "2":
        return "linear-gradient(150deg,#FC5C7D 1.88%,#6A82FB 98.29%)";
      case "3":
        return "linear-gradient(10deg,#dc293f 1.88%,#5759d8 98.29%)";
      case "4":
        return "linear-gradient(50deg,#23074d 1.88%,#cc5333 98.29%)";
      case "5":
        return "linear-gradient(150deg,#FC5C7D 1.88%,#6A82FB 98.29%)";
      case "6":
        return "linear-gradient(10deg,#dc293f 1.88%,#5759d8 98.29%)";
      case "7":
        return "linear-gradient(50deg,#23074d 1.88%,#cc5333 98.29%)";
      default:
        return;
    }
  };
  return (
    <Grid item container flexDirection={"column"} alignItems="center">
      <Grid
        item
        px={8}
        py={2}
        sx={{
          borderRadius: "20px 20px 0px 0px",
          background: fetchGradientColor(),
        }}
      >
        <ItemImage src={image} alt="" />
      </Grid>
      <Grid
        container
        item
        bgcolor={"#252525"}
        maxWidth="278px"
        maxHeight={"300px"}
        px={2}
        py={2}
        sx={{
          borderRadius: "0px 0px 20px 20px",
        }}
      >
        <Typography
          fontSize={20}
          fontWeight={600}
          textAlign="center"
          fontFamily={"Poppins"}
        >
          {title}
        </Typography>
        <Typography
          fontSize={12}
          fontWeight={200}
          textAlign="center"
          color="#b7b4c7"
          fontFamily={"Poppins"}
          mt={2}
        >
          {subTitle}
        </Typography>
      </Grid>
    </Grid>
  );
};

const FeaturesSection = () => {
  const below600 = useMediaQuery("(max-width: 600px)");
  return (
    <Grid container flexDirection={"column"} alignItems="center" mt={18}>
      <Grid item>
        <SectionTitle>Features</SectionTitle>
      </Grid>
      <Grid container item rowGap={10} justifyContent="center">
        {below600
          ? featuresData.map((item, idx) => (
              <MWebCard item={item} index={idx} key={`featuresItem_${idx}`} />
            ))
          : featuresData.map((item, idx) => (
              <>
                {idx % 2 === 0 ? (
                  <ImageLeftCard item={item} key={`featuresItem_${idx}`} />
                ) : (
                  <ImageRightCard item={item} key={`featuresItem_${idx}`} />
                )}
              </>
            ))}
      </Grid>
    </Grid>
  );
};

export default FeaturesSection;
