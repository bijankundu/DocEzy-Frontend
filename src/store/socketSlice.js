import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  socket: null,
};

export const socketSlice = createSlice({
  name: "socketState",
  initialState,
  reducers: {
    setSocket: (state, { payload }) => ({ socket: payload }),
    resetSocket: (state) => Object.assign(state, initialState),
  },
});

export const socketStateSelector = (state) => state.socketState;

export const { resetSocket, setSocket } = socketSlice.actions;
