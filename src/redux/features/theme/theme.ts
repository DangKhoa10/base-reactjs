import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface ThemeState {
  value: "brand" | "teal" | "amber" | "rose" | "purple" | "amber" | "primary";
}

// Define the initial state using that type
const initialState: ThemeState = {
  value: "primary",
};

export const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (
      state,
      action: PayloadAction<
        "brand" | "teal" | "amber" | "rose" | "purple" | "amber" | "primary"
      >
    ) => {
      state.value = action.payload;
    },
  },
});

export const { changeTheme } = ThemeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.counter.value;

export default ThemeSlice.reducer;
