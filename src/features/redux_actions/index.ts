// DUCKS pattern
import {
  createSlice, PayloadAction, current,
} from '@reduxjs/toolkit';
import { IReduxState, IServerData } from '../../types';

const initialState: IReduxState = {
  dataTable: [],
};

const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataTableAdded(state, action: PayloadAction<IServerData[]>) {
      state.dataTable = action.payload;
    },
    dataTableSearch(state, action: PayloadAction<string>) {
      state.dataTable.map((el) => Object.values(el).toString().includes(action.payload));
      // here is a main problem that it does not see my dataTable, also current(dataTable)
      // also doen not help
    },
  },
});

export const { dataTableAdded, dataTableSearch } = counterSlice.actions;
export default counterSlice.reducer;
