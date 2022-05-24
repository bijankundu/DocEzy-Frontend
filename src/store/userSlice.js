import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    setUserDetails: (state, { payload }) => ({ ...state, ...payload }),
    resetUserDetails: (state) => Object.assign(state, initialState),
  },
});

export const userStateSelector = (state) => state.userState;

export const { setUserDetails, resetUserDetails } = userSlice.actions;
