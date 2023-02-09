import { Grid } from "@mui/material";
import styled from "styled-components";

export const MainGrid = styled(Grid)`
  background-color: #dc293f;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;

  &.sm {
    padding: 10px 22px;
  }

  &.md {
    padding: 14px 76px;
  }
  > span {
    font-weight: 500;
    font-size: 22px;
  }

  @media screen and (max-width: 600px) {
    border-radius: 5px;
    > span {
      font-weight: 500;
      font-size: 16px;
    }
    &.sm {
      padding: 7px 18px;
    }

    &.md {
      padding: 14px 36px;
    }
  }
`;
