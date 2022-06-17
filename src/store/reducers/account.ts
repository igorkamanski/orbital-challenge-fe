import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const accountReducer = createSlice({
  name: 'account',
  initialState,
  reducers: {
    getAll: (state, action) => {
      state.value = action.payload;
    }
  }
})

export const { getAll } = accountReducer.actions;

export default accountReducer.reducer;