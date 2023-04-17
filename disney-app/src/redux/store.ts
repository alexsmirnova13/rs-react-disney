import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import searchStrReducer from './searchStrSlice';
import newItemsReducer from './newItemsSlice';
import { animeApi } from 'utils/animeApi';

const rootReducer = combineReducers({
  searchStr: searchStrReducer,
  newItems: newItemsReducer,
  [animeApi.reducerPath]: animeApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(animeApi.middleware),
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
