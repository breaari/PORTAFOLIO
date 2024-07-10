import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slice"

const store = configureStore({
  reducer: {
    global: reducer,
  },
});

export default store;