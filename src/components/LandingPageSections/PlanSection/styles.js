import { Grid } from "@mui/material";
import styled from "styled-components";

export const SectionTitle = styled.h3`
  font-weight: 700;
  font-size: 40px;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const StyledHeading = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: #37474f;
  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const OriginalPrice = styled.h2`
  font-weight: 600;
  font-size: 20px;
  color: #afafaf;
  text-decoration: line-through;
  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const MainPrice = styled.span`
  font-weight: 700;
  font-size: 40px;
  color: #37474f;

  @media screen and (max-width: 600px) {
    font-size: 30px;
  }
`;

export const PlanText = styled.span`
  font-weight: 600;
  font-size: 22px;
  color: #37474f;
  text-align: left;

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
`;

export const PlanItemContainer = styled(Grid)``;

export const PlanItem = styled.h3`
  font-weight: 400;
  font-size: 20px;
  color: #37474f;
  @media screen and (max-width: 600px) {
    font-size: 16px;
  }
`;
