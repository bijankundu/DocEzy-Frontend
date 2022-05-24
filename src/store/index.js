import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./userSlice";
import { socketSlice } from "./socketSlice";

const store = configureStore({
  reducer: {
    userState: userSlice.reducer,
    socketState: socketSlice.reducer,
  },
});

export default store;
