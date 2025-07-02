import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { productApi } from "@/api/productApi";
import { DataCreateProduct, Product } from "@/types/api";

interface ProductState {
  loading: boolean;
  loadingDetail: boolean;
  products: Product[];
  productDetail: Product | null;
}
const initialState: ProductState = {
  loading: false,
  loadingDetail: false,
  products: [],
  productDetail: null,
};

export const getProducts = createAsyncThunk("product/getProducts", async () => {
  const response = await productApi.getProducts();
  return response;
});
export const getProductById = createAsyncThunk("product/getProductById", async (id: number) => {
  const response = await productApi.getProductById(id);
  return response;
});
export const createProduct = createAsyncThunk("product/createProduct", async (data: DataCreateProduct) => {
  const response = await productApi.createProduct(data);
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
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getProductById.pending, (state) => {
        state.loadingDetail = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loadingDetail = false;
        state.productDetail = action.payload;
      })
      .addCase(getProductById.rejected, (state) => {
        state.loadingDetail = false;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createProduct.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice;
