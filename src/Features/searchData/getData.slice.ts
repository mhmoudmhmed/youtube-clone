import api from "src/api";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, GetAllDataAction } from "src/app_types";

const getAllData = async (term: string) => {
  await api.get("/search", {
    params: {
      q: term,
    },
  });
};

const initialState: InitialState = {
  data: {
    items: [],
    pageInfo: {
      resultsPerPage: 0,
      totalResults: 0,
    },
  },
};

export const dataSlice = createSlice({
  name: GetAllDataAction,
  initialState: initialState,
  reducers: {
    getAll: (state, { payload }) => {
      state.data = payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getAllData.fulfilled, (state, { payload: { data } }) => {
  //     state.data = data;
  //   });
  // },
});

export const { getAll } = dataSlice.actions;

export default dataSlice.reducer;
