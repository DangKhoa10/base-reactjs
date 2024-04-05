import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface LoadingFullscreenState {
  value: boolean;
}

// Define the initial state using that type
const initialState: LoadingFullscreenState = {
  value: false,
};

export const LoadingFullscreenSlice = createSlice({
  name: "loading-fullscreen",
  initialState,
  reducers: {
    show: (state) => {
      state.value = true;
    },
    hidden: (state) => {
      state.value = false;
    },
  },
});

export const { show, hidden } = LoadingFullscreenSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLoadingFullscreen = (state: RootState) =>
  state.counter.value;

export default LoadingFullscreenSlice.reducer;
