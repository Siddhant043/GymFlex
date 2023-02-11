import React from "react";
import { Dialog, styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateModal } from "../../features/slice/homeSlice";
import "react-phone-number-input/style.css";
import Register from "./Register";
import ThankyouScreen from "./ThankyouScreen";

const OnBoarding = () => {
  const dispatch = useDispatch();
  const { modalState, registerStepNo } = useSelector((state) => state.home);
  const handleClose = () => {
    dispatch(updateModal(false));
  };
  const RenderComponent = {
    1: <Register />,
    2: <ThankyouScreen />,
  };

  return (
    <CustomModal open={modalState} onClose={handleClose}>
      {RenderComponent[registerStepNo]}
    </CustomModal>
  );
};

export default OnBoarding;

export const CustomModal = styled(Dialog)`
  .css-1t1j96h-MuiPaper-root-MuiDialog-paper{
    width:400px !important;
    margin:auto;
    display;flex !important;
    align-items:center;
    background:#252525 !important;
    color:#ffffff !important;
    border-radius:10px !important;
    padding:30px 0px !important;
  }

`;
