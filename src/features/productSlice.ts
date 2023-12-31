import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { Product, ProductState } from "../types/product";

import axios from "axios";

const initialState: ProductState = {
  data: [],
  basket: [],
  loading: false,
  error: "",
  detail: [],
};

export const fetchProduct = createAsyncThunk("fetchProduct", async () => {
  const response = await axios.get<Product[]>(
    "https://fakestoreapi.com/products"
  );
  return response.data;
});

export const fetchCategoryProduct = createAsyncThunk(
  "fetchCategoryProduct",
  async (category: string) => {
    const response = await axios.get<Product[]>(
      ` https://fakestoreapi.com/products/category/${category}`
    );
    return response.data;
  }
);

export const fetchDetailProduct = createAsyncThunk(
  "fetchDetailProduct",
  async (id: string) => {
    const response = await axios.get<Product[]>(
      ` https://fakestoreapi.com/products/${id}`
    );
    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetDetailProduct(state) {
      state.detail = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.loading = false;
        state.error = "Erorr";
      })
      .addCase(
        fetchCategoryProduct.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.data = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchCategoryProduct.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchCategoryProduct.rejected, (state) => {
        state.loading = false;
        state.error = "Erorr";
      })
      .addCase(
        fetchDetailProduct.fulfilled,
        (state, action: PayloadAction<Product[]>) => {
          state.detail = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchDetailProduct.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchDetailProduct.rejected, (state) => {
        state.loading = false;
        state.error = "Erorr";
      });
  },
});
export const { resetDetailProduct } = productSlice.actions;
export default productSlice.reducer;
