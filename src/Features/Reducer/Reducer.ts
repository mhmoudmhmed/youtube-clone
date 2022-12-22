import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/api";
import { Video } from "src/Components/Types/Video.types";

export type InitialState = {
  loading: boolean | undefined;
  item: Video;
  error: any | null;
};

let initialState: InitialState = {
  loading: false,
  item: {
    items: [],
    pageInfo: {
      resultsPerPage: 0,
      totalResults: 0,
    },
  },
  error: null,
};

export const fetchData = createAsyncThunk(
  "fetch/data",
  async (term: string) => {
    const response = await api.get("/search", {
      params: {
        q: term,
      },
    });
    return response.data;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = undefined;
        state.error = action.error.message;
      });
  },
});

export default searchSlice.reducer;
