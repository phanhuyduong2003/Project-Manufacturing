import axiosClient from "@/api/axiosClient";
import {
  Category,
  DataCreateCategory,
  DataCreateMaterial,
  DataCreateUnit,
  DataUpdateCategory,
  DataUpdateMaterial,
  DataUpdateUnit,
  Material,
  Unit,
} from "@/types/api";

export const declareApi = {
  async getCategories(): Promise<Category[]> {
    const url = "/Type";
    return axiosClient.get(url);
  },
  async getCategoryById(id: number): Promise<Category> {
    const url = `/Type/${id}`;
    return axiosClient.get(url);
  },
  async createCategory(data: DataCreateCategory): Promise<Category> {
    const url = "/Type";
    return axiosClient.post(url, data);
  },
  async updateCategory(data: DataUpdateCategory): Promise<Category> {
    const url = `/Type/${data.id}`;
    return axiosClient.put(url, data);
  },
  async getMaterials(): Promise<Material[]> {
    const url = "/Material";
    return axiosClient.get(url);
  },
  async getMaterialById(id: number): Promise<Material> {
    const url = `/Material/${id}`;
    return axiosClient.get(url);
  },
  async createMaterial(data: DataCreateMaterial): Promise<Material> {
    const url = "/Material";
    return axiosClient.post(url, data);
  },
  async updateMaterial(data: DataUpdateMaterial): Promise<Material> {
    const url = `/Material/${data.id}`;
    return axiosClient.put(url, data);
  },
  async getUnits(): Promise<Unit[]> {
    const url = "/Unit";
    return axiosClient.get(url);
  },
  async createUnit(data: DataCreateUnit): Promise<Unit> {
    const url = "/Unit";
    return axiosClient.post(url, data);
  },
  async updateUnit(data: DataUpdateUnit): Promise<Unit> {
    const url = `/Unit/${data.id}`;
    return axiosClient.put(url, data);
  },
  async deleteUnit(id: number): Promise<void> {
    const url = `/Unit/${id}`;
    return axiosClient.delete(url);
  },
};
