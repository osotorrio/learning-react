import { createSlice } from '@reduxjs/toolkit';

export const countrySlice = createSlice({
  name: 'countries',
  initialState: {
    all: [],
    filtered: [],
    selected: {},
  },
  reducers: {
    add: (state, action) => {
      state.all = action.payload;
      state.filtered = action.payload;
    },
    filter: (state, action) => {
      state.filtered = state.all.filter(country =>
        country.name.toLowerCase().startsWith(action.payload.toLowerCase())
      );
    },
    select: (state, action) => {
      state.selected = action.payload;
    },
  },
});

export const { add, filter, select } = countrySlice.actions;

export default countrySlice.reducer;
