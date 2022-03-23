import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IServerData } from '../../types/index';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data',
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<IServerData[], | void>({
        query() {
          return 'all_transactions.json';
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
