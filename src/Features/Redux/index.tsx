import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../searchData/getData.slice";

const store = configureStore({
  reducer: {
    // Search: dataSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
