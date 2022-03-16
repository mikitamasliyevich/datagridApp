import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/state_feature/state_feature';
import { apiSlice } from '../features/api/data-api';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
