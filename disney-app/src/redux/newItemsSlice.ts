import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { INewHero } from 'data/HPResponse.models';

interface INewItemsState {
  value: INewHero[];
}

const initialState: INewItemsState = {
  value: [] as INewHero[],
};

export const newItemsSlice = createSlice({
  name: 'newItems',
  initialState,
  reducers: {
    setNewItems: (state, action: PayloadAction<INewHero>) => {
      state.value = state.value.concat(action.payload);
    },
  },
});

export const { setNewItems } = newItemsSlice.actions;

export const selectNewItems = (state: RootState) => state.newItems.value;

export default newItemsSlice.reducer;
