// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAnime } from 'data/HPResponse.models';
// import type { Pokemon } from './types'

// Define a service using a base URL and expected endpoints
export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kitsu.io/api/' }),
  endpoints: (builder) => ({
    getAnime: builder.query<IAnime[], string>({
      query: (searchRes) => ({
        url: `edge/anime/`,
        params: { 'page[limit]': 10, 'page[offset]': 0, 'filter[text]': searchRes || undefined },
      }),
      transformResponse: (response: { data: IAnime[] }) => response.data,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAnimeQuery } = animeApi;
