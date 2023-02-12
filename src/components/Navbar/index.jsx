import { Grid } from "@mui/material";
import React from "react";
import Logo from "../../assets/logo.svg";
import CommonButton from "../CommonButton";
import { navItems } from "./data";
import { LogoImage, NavbarItem, StyledLink } from "./styles";

const Navbar = () => {
  const handleScroll = (id, e) => {
    const features = document.querySelector(`#${id}`);
    features.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent="space-between"
      flexDirection={"row"}
      px={{ xs: 1, md: 4, lg: 8 }}
      py={4}
    >
      <Grid item>
        <LogoImage src={Logo} alt="logo" />
      </Grid>
      <Grid item container width={"fit-content"}>
        {navItems.map((item, idx) => (
          <NavbarItem item px={2} key={`navItem_${idx}`}>
            <StyledLink onClick={(e) => handleScroll(item.id, e)}>
              {item.name}
            </StyledLink>
          </NavbarItem>
        ))}
      </Grid>
      <Grid item>
        <CommonButton text="Sign Up" size="sm" />
      </Grid>
    </Grid>
  );
};

export default Navbar;
