import React, { useState } from "react";
import {
  styled,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  Typography,
  TextField,
} from "@mui/material";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { registerStep } from "../../features/slice/homeSlice";
import { useDispatch } from "react-redux";
import CustomButton from "../Reusables/CustomButton";
import { useOnBoarding } from "../../hooks/useOnBoading";

const Register = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState();
  const [userInfo, setUserInfo] = useState({
    name: "",
    gymName: "",
  });
  const { alreadyHaveNumber, postUsersData } = useOnBoarding(phoneNumber);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  console.log(userInfo, "user");
  const handleSubmit = async () => {
    if (alreadyHaveNumber) {
      return;
    }
    if (isValidPhoneNumber(phoneNumber)) {
      await postUsersData({ phoneNumber: phoneNumber,...userInfo });
      dispatch(registerStep({ number: phoneNumber, stepNo: 2 }));
    }
  };
  return (
    <DialogContainer>
      <DialogTitle className="title">Pre Register</DialogTitle>
      <DialogContent className="content">
        <DialogContentText>
          <Typography className="custom__label">Phone number</Typography>
          <Box className="register__fields">
            <Box className="input__container">
              <PhoneInput
                className="input__field"
                international
                defaultCountry="IN"
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
            </Box>
            <Box>
              <Typography className="custom__label">Name</Typography>
              <TextField
                fullWidth
                className="input__field"
                onChange={handleChange}
                name="name"
                value={userInfo.name}
              />
            </Box>
            <Box>
              <Typography className="custom__label">Gym Name</Typography>
              <TextField
                fullWidth
                className="input__field"
                onChange={handleChange}
                name="gymName"
                value={userInfo.gymName}
              />
            </Box>
          </Box>
        </DialogContentText>
        <CustomButton
          className="button"
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </CustomButton>
      </DialogContent>
    </DialogContainer>
  );
};

export default Register;

export const DialogContainer = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .content {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding:0px !important;
  }
  .register__fields {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  .title {
    font-family: Poppins !important;
    padding:0 !important;
  }
  .input__field {
    background: white;
    border-radius: 10px;
    width:100% !important;
  }
  .input__container {
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 10px;
    background: #ffffff;
    .PhoneInputInput {
      height: 30px !important;
      font-size: 18px;
    }
  }
  .custom__label {
    color: #c7c7c7 !important;
    fontfamily: Poppins;
    margin-bottom: 2px;
  }
`;
