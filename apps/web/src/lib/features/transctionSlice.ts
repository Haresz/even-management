import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

const initialState: any = {
  transaction: {},
};

const actionSetTransaction = createAsyncThunk(
  'transaction/actionTransaction',
  (val) => {
    return val;
  },
);

export const transactionSlice = createSlice({
  name: 'transactionSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actionSetTransaction.fulfilled, (state, action) => {
      state.transaction = action.payload;
    });
  },
});

export { actionSetTransaction, initialState };
export default transactionSlice.reducer;
