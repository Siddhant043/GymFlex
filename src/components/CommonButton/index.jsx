import React from "react";
import { MainGrid } from "./styles";
import { useDispatch } from "react-redux";
import { updateModal } from "../../features/slice/homeSlice";

const CommonButton = ({ text = "", size = "md" }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    return dispatch(updateModal(true));
  };
  return (
    <MainGrid container onClick={handleClick} className={size}>
      <span>{text}</span>
    </MainGrid>
  );
};

export default CommonButton;
