import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarItem = styled(Grid)`
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const LogoImage = styled.img`
  @media screen and (max-width: 600px) {
    width: 200px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: unset;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 2px;
    background: #dc293f;
    transition: width 0.3s;
  }
  &:hover::after {
    width: 100%;
    //transition: width .3s;
  }
`;
