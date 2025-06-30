import axiosClient from "@/api/axiosClient";
import { Account } from "@/types/api";

export const accountApi = {
  async getAccounts(): Promise<Account[]> {
    const url = "/Employee";
    return axiosClient.get(url);
  },
  async getAccountById(id: number): Promise<Account> {
    const url = `/Employee/${id}`;
    return axiosClient.get(url);
  },
  async createAccount(account: Account): Promise<Account> {
    const url = "/Employee";
    return axiosClient.post(url, account);
  },
  async updateAccount(id: number, account: Account): Promise<Account> {
    const url = `/Employee/${id}`;
    return axiosClient.put(url, account);
  },
};
