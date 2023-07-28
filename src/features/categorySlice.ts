import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";
import { Category } from "../types/product";

const initialState: Category = {
  category: [],
  loading: false,
  error: "",
};
export const getCategories = createAsyncThunk("category", async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories"
  );
  return response.data;
});

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.category = action.payload;
        state.loading = false;
      })
      .addCase(getCategories.pending, (state, action) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = "Erorr";
      });
  },
});
export default categorySlice.reducer;
