import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({ children,onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default CustomButton;

export const StyledButton = styled(Button)`
  background: #dc293f;
  width: 50%;
  margin: auto;
  margin-top: 30px;
  color:#ffffff;
  &:hover{
    background: #dc293f;
  }
`;
