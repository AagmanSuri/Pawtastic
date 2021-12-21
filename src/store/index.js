import { configureStore } from "@reduxjs/toolkit";
import userProfileSlice from "./reducers/userProfileSlice";

export const store = configureStore({
  reducer: {
    userProfile: userProfileSlice
  }
});
