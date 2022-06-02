import { createSlice } from "@reduxjs/toolkit";

export const zooSlice = createSlice({
  name: "zoo",
  initialState: [],
  reducers: {
    catchAnimal: (state, { payload }) => {
      state.push(payload);
    },
    freeAnimal: (state, { payload }) => {
      const index = state.map(function(e) { return e.id; }).indexOf(payload.id);
      state.splice(index, 1);
    },
    clear: () => zooSlice.getInitialState(),
    feedAnimal: (state, { payload }) => {
      const key = Object.keys(payload)[2];
      const index = state.map(function(e) { return e.id; }).indexOf(payload.id);
      let clone = {};
      for (let key in payload) {
        clone[key] = payload[key];
      };
      clone[key] = clone[key] + 1;
      state[index] = clone;
    }
  },
});
