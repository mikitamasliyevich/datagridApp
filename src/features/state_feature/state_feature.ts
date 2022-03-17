// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  dataTable: any;
}

const initialState: CounterState = {
  dataTable: [],
};

const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataTableAdded(state, action: PayloadAction<any>) {
      state.dataTable = action.payload;
    },
  },
});

export const { dataTableAdded } = counterSlice.actions;
export default counterSlice.reducer;
