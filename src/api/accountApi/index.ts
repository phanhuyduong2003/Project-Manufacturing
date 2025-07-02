import axiosClient from "@/api/axiosClient";
import { Account, DataCreateAccount, DataUpdateAccount } from "@/types/api";

export const accountApi = {
  async getAccounts(): Promise<Account[]> {
    const url = "/Employee";
    return axiosClient.get(url);
  },
  async getAccountById(id: number): Promise<Account> {
    const url = `/Employee/${id}`;
    return axiosClient.get(url);
  },
  async createAccount(data: DataCreateAccount): Promise<Account> {
    const url = "/Employee";
    return axiosClient.post(url, data);
  },
  async updateAccount(data: DataUpdateAccount): Promise<Account> {
    const url = `/Employee/${data.id}`;
    return axiosClient.put(url, data);
  },
};
