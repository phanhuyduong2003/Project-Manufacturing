import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { accountApi } from "@/api/accountApi";
import { Account, DataCreateAccount, DataUpdateAccount } from "@/types/api";

interface AccountState {
  loading: boolean;
  accounts: Account[];
  accountDetail: Account | null;
}
const initialState: AccountState = {
  loading: false,
  accounts: [],
  accountDetail: null,
};

export const getAccounts = createAsyncThunk<Account[], void>("account/getAccounts", async () => {
  const response = await accountApi.getAccounts();
  return response;
});
export const getAccountById = createAsyncThunk<Account, number>("account/getAccountById", async (id) => {
  const response = await accountApi.getAccountById(id);
  return response;
});
export const createAccount = createAsyncThunk<Account, DataCreateAccount>("account/createAccount", async (account) => {
  const response = await accountApi.createAccount(account);
  return response;
});
export const updateAccount = createAsyncThunk<Account, DataUpdateAccount>("account/updateAccount", async (account) => {
  const response = await accountApi.updateAccount(account);
  return response;
});

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAccounts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAccounts.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts = action.payload;
      })
      .addCase(getAccounts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(getAccountById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAccountById.fulfilled, (state, action) => {
        state.loading = false;
        state.accountDetail = action.payload;
      })
      .addCase(getAccountById.rejected, (state) => {
        state.loading = false;
      })
      .addCase(createAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(createAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.accounts.push(action.payload);
      })
      .addCase(createAccount.rejected, (state) => {
        state.loading = false;
      })
      .addCase(updateAccount.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.loading = false;
        state.accountDetail = action.payload;
      })
      .addCase(updateAccount.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default accountSlice;
