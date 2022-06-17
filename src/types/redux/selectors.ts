import { RootState } from "./index";

export const getAccounts = (state: RootState) => state.account.value;
