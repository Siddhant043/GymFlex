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
      <img width={"40px"} src={ThankyouGif} alt="" />
      <Typography
        fontWeight={300}
        fontSize={18}
        mt={2}
        px={2}
        textAlign="center"
      >
        Thank you for pre-registering on our website. We appreciate your support
        and can't wait to share our platform with you soon!
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
