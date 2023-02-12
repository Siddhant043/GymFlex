import React from "react";
import { MainGrid } from "./styles";
import { useDispatch } from "react-redux";
import { updateModal } from "../../features/slice/homeSlice";

const CommonButton = ({ text = "", size = "md", handleBtnClick = null }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    return dispatch(updateModal(true));
  };
  if (handleBtnClick === null)
    return (
      <MainGrid container onClick={handleClick} className={size}>
        <span>{text}</span>
      </MainGrid>
    );
  return (
    <MainGrid container onClick={handleBtnClick} className={size}>
      <span>{text}</span>
    </MainGrid>
  );
};

export default CommonButton;
