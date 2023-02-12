import React from "react";
import {
  styled,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Box,
  Typography,
} from "@mui/material";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import { registerStep } from "../../features/slice/homeSlice";
import { useDispatch } from "react-redux";
import CustomButton from "../Reusables/CustomButton";
import { useOnBoarding } from "../../hooks/useOnBoading";

const Register = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = React.useState();
  const { alreadyHaveNumber, postUsersData } = useOnBoarding(phoneNumber);
  const handleSubmit = async () => {
    if (alreadyHaveNumber) {
      return;
    }
    if (isValidPhoneNumber(phoneNumber)) {
      await postUsersData({ phoneNumber: phoneNumber });
      dispatch(registerStep({ number: phoneNumber, stepNo: 2 }));
    }
  };
  return (
    <DialogContainer>
      <DialogTitle>Pre Register</DialogTitle>
      <DialogContent className="content">
        <DialogContentText>
          <Typography color="#C7C7C7">Phone number</Typography>
          <Box className="input__container">
            <PhoneInput
              className="input__field"
              international
              defaultCountry="IN"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
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
  }
  .input__container {
    padding: 10px 20px;
    border: 1px solid black;
    border-radius: 10px;
    background: #ffffff;
    width: 280px !important;
    .PhoneInputInput {
      height: 30px !important;
      font-size: 18px;
    }
  }
`;
