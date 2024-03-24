import { configureStore } from "@reduxjs/toolkit";
import commmandReducer from "../features/CMD";

const store = configureStore({
  reducer: {
    command: commmandReducer,
  },
});

export default store;
