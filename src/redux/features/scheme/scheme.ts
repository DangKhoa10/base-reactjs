import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

interface SchemeState {
  value: "dark" | "light";
}

// Define the initial state using that type
const initialState: SchemeState = {
  value: "light",
};

export const SchemeSlice = createSlice({
  name: "scheme",
  initialState,
  reducers: {
    changeScheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.value = action.payload;
    },
  },
});

export const { changeScheme } = SchemeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectScheme = (state: RootState) => state.counter.value;

export default SchemeSlice.reducer;
