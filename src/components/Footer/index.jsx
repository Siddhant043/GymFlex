import { Grid } from "@mui/material";
import React from "react";
import LogoImage from "../../assets/logo.svg";

const Footer = () => {
  return (
    <Grid
      container
      item
      bgcolor={"#242228"}
      width="100%"
      minHeight={"25vh"}
      flexDirection="column"
      alignItems={"center"}
      justifyContent="center"
      mt={18}
    >
      <img src={LogoImage} alt="logo" />
      <Grid
        container
        item
        alignItems={"center"}
        justifyContent="space-evenly"
        mt={4}
      >
        <h4 style={{ cursor: "pointer" }}>Join our team</h4>
        <h4>Copyright GymFlex 2023</h4>
      </Grid>
    </Grid>
  );
};

export default Footer;
