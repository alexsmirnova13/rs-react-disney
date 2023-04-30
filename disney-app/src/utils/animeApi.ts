import { IAnime } from '../data/HPResponse.models';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const animeApi = createApi({
  reducerPath: 'animeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://kitsu.io/api/' }),
  endpoints: (builder) => ({
    getAnime: builder.query<IAnime[], string>({
      query: (searchRes) => ({
        url: `edge/anime/`,
        params: { 'page[limit]': 10, 'page[offset]': 0, 'filter[text]': searchRes || undefined },
      }),
      transformResponse: async (response: { data: IAnime[] }) => {
        return response.data;
      },
    }),
  }),
});

export const { useGetAnimeQuery } = animeApi;
