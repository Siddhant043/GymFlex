import { Grid } from "@mui/material";
import styled from "styled-components";

export const SectionTitle = styled.h3`
  font-weight: 700;
  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const ParentGrid = styled(Grid)`
  position: relative;
`;

export const BackgroundStyles = styled.img`
  position: absolute;
  width: 80%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;

export const BenefitItem = styled(Grid)`
  background: rgba(0, 0, 0, 0.33);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(6.7px);
  -webkit-backdrop-filter: blur(6.7px);
  border: 1px solid rgba(0, 0, 0, 0.61);

  @media screen and (max-width: 900px) {
    > img {
      width: 60vw;
    }
  }
`;

export const ItemHeading = styled.h3`
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const ItemSubHeading = styled.h4`
  max-width: 300px;
  font-weight: 200;
  font-size: 16px;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
