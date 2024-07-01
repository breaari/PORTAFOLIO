import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeSection: 'home'
};

const Slice = createSlice({
  name: "storage",
  initialState,
  reducers: {
    setActiveSection(state, action) {
      state.activeSection = action.payload;
    }
  },
});

export const { setActiveSection } = Slice.actions;

export default Slice.reducer;
