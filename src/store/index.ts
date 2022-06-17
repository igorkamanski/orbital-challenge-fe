import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducers/account";

export const store = configureStore({
  reducer: {
    account: accountReducer
  }
});