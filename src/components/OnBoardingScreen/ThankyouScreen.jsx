import { styled, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import ThankyouGif from "../../assets/Thankyou.gif";
import { updateModal } from "../../features/slice/homeSlice";
import CustomButton from "../Reusables/CustomButton";

const ThankyouScreen = () => {
  const dispatch = useDispatch();
  return (
    <TYContainer>
      <img src={ThankyouGif} alt="" />
      <Typography fontWeight={700} fontSize={24} mt={2}>
        Thank You
      </Typography>
      <CustomButton onClick={() => dispatch(updateModal(false))}>
        Close
      </CustomButton>
    </TYContainer>
  );
};

export default ThankyouScreen;

export const TYContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    object-fit: cover;
  }
`;
