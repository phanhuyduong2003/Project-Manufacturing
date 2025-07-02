import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { declareApi } from "@/api/declareApi";
import {
  Category,
  DataCreateCategory,
  DataCreateMaterial,
  DataCreateUnit,
  DataUpdateMaterial,
  DataUpdateUnit,
  Material,
  Unit,
} from "@/types/api";

interface DeclareState {
  loading: boolean;
  loadingDetail: boolean;
  categories: Category[];
  categoryDetail: Category | null;
  materials: Material[];
  materialDetail: Material | null;
  units: Unit[];
}
const initialState: DeclareState = {
  loading: false,
  loadingDetail: false,
  categories: [],
  categoryDetail: null,
  materials: [],
  materialDetail: null,
  units: [],
};

export const getCategories = createAsyncThunk<Category[], void>("declare/getCategories", async () => {
  const response = await declareApi.getCategories();
  return response;
});
export const getCategoryById = createAsyncThunk<Category, number>("declare/getCategoryById", async (id) => {
  const response = await declareApi.getCategoryById(id);
  return response;
});
export const createCategory = createAsyncThunk<Category, DataCreateCategory>("declare/createCategory", async (data) => {
  const response = await declareApi.createCategory(data);
  return response;
});
export const updateCategory = createAsyncThunk<Category, Category>("declare/updateCategory", async (data) => {
  const response = await declareApi.updateCategory(data);
  return response;
});
export const getMaterials = createAsyncThunk("declare/getMaterials", async () => {
  const response = await declareApi.getMaterials();
  return response;
});
export const getMaterialById = createAsyncThunk<Material, number>("declare/getMaterialById", async (id) => {
  const response = await declareApi.getMaterialById(id);
  return response;
});
export const createMaterial = createAsyncThunk<Material, DataCreateMaterial>("declare/createMaterial", async (data) => {
  const response = await declareApi.createMaterial(data);
  return response;
});
export const updateMaterial = createAsyncThunk<Material, DataUpdateMaterial>("declare/updateMaterial", async (data) => {
  const response = await declareApi.updateMaterial(data);
  return response;
});
export const getUnits = createAsyncThunk("declare/getUnits", async () => {
  const response = await declareApi.getUnits();
  return response;
});
export const createUnit = createAsyncThunk("declare/createUnit", async (data: DataCreateUnit) => {
  const response = await declareApi.createUnit(data);
  return response;
});
export const updateUnit = createAsyncThunk("declare/updateUnit", async (data: DataUpdateUnit) => {
  const response = await declareApi.updateUnit(data);
  return response;
});
export const deleteUnit = createAsyncThunk("declare/deleteUnit", async (id: number) => {
  await declareApi.deleteUnit(id);
  return id;
});

const declareSlice = createSlice({
  name: "declare",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDetail = action.payload;
      })
      .addCase(getCategoryById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryDetail = action.payload;
      })
      .addCase(updateCategory.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getMaterials.pending, (state) => {
        state.loading = true;
      })
      .addCase(getMaterials.fulfilled, (state, action) => {
        state.loading = false;
        state.materials = action.payload;
      })
      .addCase(getMaterials.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getMaterialById.pending, (state) => {
        state.loadingDetail = true;
      })
      .addCase(getMaterialById.fulfilled, (state, action) => {
        state.loadingDetail = false;
        state.materialDetail = action.payload;
      })
      .addCase(getMaterialById.rejected, (state) => {
        state.loadingDetail = false;
      })
      .addCase(createMaterial.pending, (state) => {
        state.loading = true;
      })
      .addCase(createMaterial.fulfilled, (state, action) => {
        state.loading = false;
        state.materials.push(action.payload);
      })
      .addCase(createMaterial.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateMaterial.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateMaterial.fulfilled, (state, action) => {
        state.loading = false;
        state.materialDetail = action.payload;
      })
      .addCase(updateMaterial.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getUnits.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUnits.fulfilled, (state, action) => {
        state.loading = false;
        state.units = action.payload;
      })
      .addCase(getUnits.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createUnit.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUnit.fulfilled, (state, action) => {
        state.loading = false;
        state.units.push(action.payload);
      })
      .addCase(createUnit.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateUnit.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUnit.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.units.findIndex((unit) => unit.id === action.payload.id);
        if (index !== -1) {
          state.units[index] = action.payload;
        }
      })
      .addCase(updateUnit.rejected, (state) => {
        state.loading = false;
      })
      .addCase(deleteUnit.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUnit.fulfilled, (state, action) => {
        state.loading = false;
        state.units = state.units.filter((unit) => unit.id !== action.payload);
      })
      .addCase(deleteUnit.rejected, (state) => {
        state.loading = false;
      });
  },
});
export default declareSlice;
