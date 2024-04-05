import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counter";
import themeReducer from "./features/theme/theme";
import schemeReducer from "./features/scheme/scheme";
import layoutReducer from "./features/layout/layout";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    theme: themeReducer,
    scheme: schemeReducer,
    layout: layoutReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
