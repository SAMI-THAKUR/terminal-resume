import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  history: [],
  currentCommand: "",
};

const commandSlice = createSlice({
  name: "command",
  initialState,
  reducers: {
    history: (state, action) => {
      state.history = [...state.history, action.payload];
    },
    cmdEntered: (state, action) => {
      state.currentCommand = action.payload;
    },
  },
});

export default commandSlice.reducer;
export const { history, cmdEntered } = commandSlice.actions;
