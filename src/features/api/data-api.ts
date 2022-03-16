import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Breed {
  amount: string;
  asset_description: string;
  cap_gains_over_200_usd: boolean;
  disclosure_date: boolean;
  disclosure_year: number;
  district: string;
  owner: string;
  ptr_link: string;
  representative: string;
  ticker: string;
  transaction_date: string;
  type: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data',
  }),
  endpoints(builder) {
    return {
      fetchBreeds: builder.query<Breed[], number | void>({
        query() {
          return 'all_transactions.json';
        },
      }),
    };
  },
});

export const { useFetchBreedsQuery } = apiSlice;
