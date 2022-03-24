// DUCKS pattern
import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { IReduxState, IServerData } from '../../types';

const initialState: IReduxState = {
  dataTable: [],
  dataTableSearch: '',
};

const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataTableAdded(state, action: PayloadAction<IServerData[]>) {
      state.dataTable = action.payload;
    },
    dataTableSearch(state, action: PayloadAction<string>) {
      let searchDataTable = [...state.dataTable];
      searchDataTable = searchDataTable
        .map((el) => Object.values(el)
          .filter((eal) => eal?.toString().toLowerCase().includes(action.payload.toLowerCase())));
      return {
        ...state,
        dataTable: searchDataTable,
      };
    },
  },
});

export const { dataTableAdded, dataTableSearch } = counterSlice.actions;
export default counterSlice.reducer;
