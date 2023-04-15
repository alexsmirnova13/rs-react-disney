import { configureStore } from '@reduxjs/toolkit';
import searchStrReducer from './searchStrSlice';
import newItemsReducer from './newItemsSlice';
import { animeApi } from 'utils/animeApi';
export const store = configureStore({
  reducer: {
    searchStr: searchStrReducer,
    newItems: newItemsReducer,
    [animeApi.reducerPath]: animeApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
