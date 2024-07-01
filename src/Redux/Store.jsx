import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slice"

const store = configureStore({
  reducer: {
    storage: reducer,
  },
});

export default store;