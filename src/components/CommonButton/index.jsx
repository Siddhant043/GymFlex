import React from "react";
import { MainGrid } from "./styles";

const CommonButton = ({ text = "", handleClick = () => {}, size = "md" }) => {
  return (
    <MainGrid container onClick={handleClick} className={size}>
      <span>{text}</span>
    </MainGrid>
  );
};

export default CommonButton;
