import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { productApi } from "@/api/productApi";

interface ProductState {
  loading: boolean;
  products: unknown[];
}
const initialState: ProductState = {
  loading: false,
  products: [],
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await productApi.getProducts();
  return response;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice;
