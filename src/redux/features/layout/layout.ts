import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

export interface LayoutState {
  value: "classic" | "classy" | "dense";
}

// Define the initial state using that type
const initialState: LayoutState = {
  value: "classic",
};

export const LayoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    changeLayout: (
      state,
      action: PayloadAction<"classic" | "classy" | "dense">
    ) => {
      state.value = action.payload;
    },
  },
});

export const { changeLayout } = LayoutSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLayout = (state: RootState) => state.counter.value;

export default LayoutSlice.reducer;
