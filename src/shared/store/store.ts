import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { catsAPI } from '../../modules/CatsModule/api/fetchCatsData';
import { dogsAPI } from '../../modules/DogsModule/api/fetchDogsData';

const rootReducer = combineReducers({
  [catsAPI.reducerPath]: catsAPI.reducer,
  [dogsAPI.reducerPath]: dogsAPI.reducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(catsAPI.middleware, dogsAPI.middleware)
  });
};