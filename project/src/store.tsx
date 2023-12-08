import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./features/appSlice";

const store = configureStore({
  reducer: {
    app: appSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
