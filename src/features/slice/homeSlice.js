import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "Home",
  initialState: {
    modalState: false,
    userPhoneNumber: null,
    registerStepNo: 1,
  },
  reducers: {
    updateModal: (state, action) => {
      state.modalState = action.payload;
    },
    registerStep: (state, action) => {
      state.userPhoneNumber = action.payload.number;
      state.registerStepNo = action.payload.stepNo;
    },
  },
});

export const { updateModal, registerStep } = homeSlice.actions;

export default homeSlice.reducer;
