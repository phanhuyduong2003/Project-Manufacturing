import axiosClient from "@/api/axiosClient";

export const productApi = {
  async getProducts() {
    const url = "/Product";
    return axiosClient.get(url);
  },
  async getProductById(id: number) {
    const url = "/Product";
    return axiosClient.get(url, { params: { id } });
  },
};
