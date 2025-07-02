import axiosClient from "@/api/axiosClient";
import { DataCreateProduct, Product } from "@/types/api";

export const productApi = {
  async getProducts(): Promise<Product[]> {
    const url = "/Product";
    return axiosClient.get(url);
  },
  async getProductById(id: number): Promise<Product> {
    const url = `/Product/${id}`;
    return axiosClient.get(url);
  },
  async createProduct(data: DataCreateProduct): Promise<Product> {
    const url = "/Product";
    return axiosClient.post(url, data);
  },
};
