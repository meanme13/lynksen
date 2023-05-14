import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_KEY } from '../../../shared/api/apiKey';
import { IAllBreeds, IOneBreed } from '../../../shared/models/breeds';

export const dogsAPI = createApi({
  reducerPath: 'dogsAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.thedogapi.com/v1'}),
  endpoints: (build) => ({
    fetchAllBreeds: build.query<IAllBreeds[], string>({
      query: () => ({
        url: '/breeds',

      })
    }),
    fetchOneBreed: build.query<IOneBreed[], number | string>({
      query: (id: number | string) => ({
        url: `/images/search?limit=10&breed_ids=${id}&api_key=${API_KEY}`
      })
    })
  })
});