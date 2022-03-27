// DUCKS pattern
import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import { IReduxState, IServerData } from '../../types';

const initialState: IReduxState = {
  dataTable: [],
  dataTableHeader: [],
  dataTableSearch: '',
  activeSort: null,
};

const counterSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    dataTableAdded(state, action: PayloadAction<IServerData[]>) {
      state.dataTable = action.payload;
    },
    dataTableHeaderAdded(state, action: PayloadAction<IServerData[]>) {
      state.dataTableHeader = action.payload;
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
    sortAsc(state, action: PayloadAction<number>) {
      let dataSortAscTable = [...state.dataTable];
      dataSortAscTable = dataSortAscTable.map((el) => Object.values(el)).sort((a, b) => {
        if (a[action.payload] < b[action.payload]) return -1;
        if (a[action.payload] > b[action.payload]) return 1;
        return 0;
      });

      return {
        ...state,
        activeSort: { column: action.payload, sort: 'SORT_ASC' },
        dataTable: dataSortAscTable,
      };
    },
    sortDec(state, action:PayloadAction<number>) {
      let dataSortDrcTable = [...state.dataTable];
      dataSortDrcTable = dataSortDrcTable.map((el) => Object.values(el)).sort((a, b) => {
        if (a[action.payload] > b[action.payload]) return -1;
        if (a[action.payload] < b[action.payload]) return 1;
        return 0;
      });
      return {
        ...state,
        activeSort: { column: action.payload, sort: 'SORT_DES' },
        dataTable: dataSortDrcTable,
      };
    },
    sortCancel(state, action: PayloadAction<number>) {
      let dataCancelSortTable = [...state.dataTable];
      dataCancelSortTable = dataCancelSortTable.map((el) => Object.values(el)).sort((a, b) => {
        if (a[action.payload] < b[action.payload]) return -1;
        if (a[action.payload] > b[action.payload]) return 1;
        return 0;
      });
      return {
        ...state,
        activeSort: { column: action.payload, sort: 'SORT_CANCEL' },
        dataTable: dataCancelSortTable,

      };
    },
  },
});

export const {
  dataTableAdded, dataTableHeaderAdded,
  dataTableSearch, sortAsc, sortDec, sortCancel,
} = counterSlice.actions;
export default counterSlice.reducer;
