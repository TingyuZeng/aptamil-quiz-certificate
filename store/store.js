import { createSlice, configureStore } from "@reduxjs/toolkit";

const playerSlice = createSlice({
  name: "players",
  initialState: {
    players: [],
  },
  reducers: {
    update: (state, action) => {
      state.players = [...action.payload.players];
    },
    clear: (state) => {
      state.players = [];
    },
  },
});

export const { update, clear } = playerSlice.actions;

const store = configureStore({
  reducer: playerSlice.reducer,
});

export default store;
