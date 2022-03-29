// DUCKS pattern
import {
  createSlice, PayloadAction, current,
} from '@reduxjs/toolkit';
import { IReduxState, IServerData } from '../../types';

const initialState: IReduxState = {
  dataTable: [],
  dataTableCopy: [],
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
      state.dataTableCopy = action.payload;
    },
    dataTableSearch(state, action: PayloadAction<any>) {
      const searchDataTable = current(state).dataTable.map((el) => [el]
        .filter((row) => Object.values(row)
          .some((cell) => cell?.toString().includes(action.payload)))).flat();
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
    onlyTrue(state) {
      const onlyTrueData = current(state).dataTable.map((el) => [el]
        .filter((row) => row.cap_gains_over_200_usd === true)).flat();

      return {
        ...state,
        dataTable: onlyTrueData,
      };
    },
    trueAndFalse(state) {
      const dataTablePrevious = current(state).dataTableCopy;

      return {
        ...state,
        dataTable: dataTablePrevious,
      };
    },
  },
});

export const {
  dataTableAdded, dataTableHeaderAdded,
  dataTableSearch, sortAsc, sortDec, sortCancel,
  onlyTrue, trueAndFalse,
} = counterSlice.actions;
export default counterSlice.reducer;
