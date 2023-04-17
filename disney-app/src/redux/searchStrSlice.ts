import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface ISearchStrState {
  value: string;
}

const initialState: ISearchStrState = {
  value: '',
};

export const searchStrSlice = createSlice({
  name: 'searchStr',
  initialState,
  reducers: {
    setSearchStr: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSearchStr } = searchStrSlice.actions;

export const selectSearchStr = (state: RootState) => state.searchStr.value;

export default searchStrSlice.reducer;
