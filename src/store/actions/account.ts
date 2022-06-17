import { getAll } from "../reducers/account";
import { AppThunk } from "../../types/redux";

import { MockAccounts } from "../../mocks/account";

export const getAllAction = (): AppThunk =>
  (dispatch, getState) =>
  {
    dispatch(getAll(MockAccounts));
  }