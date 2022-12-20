import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { GetAllCategories, getAllCategoriesResponse } from "./search.req";
export async function createThunkBody<ResponseType>(
  requesterFunc: Promise<AxiosResponse<ResponseType>>,
  thunkApi: any,
  fallbackErrorMsg: string
) {
  try {
    const { data } = await requesterFunc;
    return data;
  } catch (error) {
    const msg = error.response?.data.message || fallbackErrorMsg;
    return thunkApi.rejectWithValue(msg);
  }
}

export interface category {
  code: string;
  id: number;
  parent_id?: number;
  name: string;
  icon: string;
  description: string;
  created_at: string;
  updated_at: string;
}

declare type AsyncLoader = boolean | null | undefined;

export interface searchState {
  categories: category[];
  perPage: number;
  page: number;
  lastPage: number;
  total: number;
  categoriesFilters: [];
  loaders: {
    fetchAll: AsyncLoader;
    delete: AsyncLoader;
  };

  errors: {
    fetchAll: string;
    delete: string;
  };
}

const initialState: searchState = {
  categories: [],
  page: 0,
  perPage: 0,
  lastPage: 0,
  total: 0,
  categoriesFilters: [],
  loaders: {
    fetchAll: null,
    delete: null,
  },
  errors: {
    fetchAll: "",
    delete: "",
  },
};

export interface FetchAllCategoriesPayload {
  payload: any;
}

export const FetchAllCategories = createAsyncThunk<
  getAllCategoriesResponse,
  FetchAllCategoriesPayload,
  { rejectValue: string }
>("/search", async ({ payload }, thunkApi) => {
  return await createThunkBody(
    GetAllCategories(),
    thunkApi,
    "Error fetching categories"
  );
});

const searchYoutubeSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(FetchAllCategories.pending, (state) => {
        state.loaders.fetchAll = true;
        state.errors.fetchAll = "";
      })
      .addCase(
        FetchAllCategories.fulfilled,
        (state, { payload: { data } }) => {
          state.loaders.fetchAll = false;
          state.categories = data;
        //   state.lastPage = meta?.last_page;
        //   state.categoriesFilters = filters || [];
        //   state.total = meta?.total;
        //   state.page = meta?.current_page;
        //   state.perPage = meta?.per_page;
        }
      )
      .addCase(FetchAllCategories.rejected, (state, { payload }) => {
        state.loaders.fetchAll = false;
        state.errors.fetchAll = payload || "error in fetching all data";
      });
  },
});
export default searchYoutubeSlice.reducer;
