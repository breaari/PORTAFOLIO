import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSections: ['home'],
  theme: 'light'
};

const Slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setActiveSections(state, action) {
      state.activeSections = action.payload;
    },
    toggleTheme(state) {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    }
  },
});

export const { setActiveSections, toggleTheme } = Slice.actions;

export default Slice.reducer;
