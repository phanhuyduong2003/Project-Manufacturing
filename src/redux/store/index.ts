import { configureStore } from "@reduxjs/toolkit";

import accountSlice from "@/redux/slices/accountSlice";
import declareSlice from "@/redux/slices/declareSlice";
import productSlice from "@/redux/slices/productSlice";

export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    account: accountSlice.reducer,
    declare: declareSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
