import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/redux_actions';
import { apiSlice } from '../features/api/data-api';

export const store = configureStore({
  reducer: {
    data: dataReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
