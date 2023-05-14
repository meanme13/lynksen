import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../../../shared/api/apiKey';
import { IAllBreeds, IOneBreed } from '../../../shared/models/breeds';

export const catsAPI = createApi({
  reducerPath: 'catsAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.thecatapi.com/v1'}),
  endpoints: (build) => ({
    fetchAllBreeds: build.query<IAllBreeds[], string>({
      query: () => ({
        url: '/breeds',

      })
    }),
    fetchOneBreed: build.query<IOneBreed[], string | number>({
      query: (id: string | number) => ({
        url: `/images/search?limit=10&breed_ids=${id}&api_key=${API_KEY}`
      })
    })
  })
});