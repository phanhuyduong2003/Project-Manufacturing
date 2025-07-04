import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { productApi } from "@/api/productApi";
import { DataCreateProduct, Formula, FormulaMaterial, Product } from "@/types/api";

interface ProductState {
  loading: boolean;
  loadingDetail: boolean;
  products: Product[];
  productDetail: Product | null;
  formulas: Formula[];
  formulaMaterials: FormulaMaterial[];
}
const initialState: ProductState = {
  loading: false,
  loadingDetail: false,
  products: [],
  productDetail: null,
  formulas: [],
  formulaMaterials: [],
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
export const getFormulas = createAsyncThunk("product/getFormulas", async () => {
  const response = await productApi.getFormulas();
  return response;
});
export const getFormulaMaterials = createAsyncThunk("product/getFormulaMaterials", async () => {
  const response = await productApi.getFormulaMaterials();
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
      })
      .addCase(getFormulas.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFormulas.fulfilled, (state, action) => {
        state.loading = false;
        state.formulas = action.payload;
      })
      .addCase(getFormulas.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getFormulaMaterials.pending, (state) => {
        state.loading = true;
      })
      .addCase(getFormulaMaterials.fulfilled, (state, action) => {
        state.loading = false;
        state.formulaMaterials = action.payload;
      })
      .addCase(getFormulaMaterials.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice;
