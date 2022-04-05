import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../views/AdminPage/adminSlice";
const rootReducer = {
  admin: adminReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
export const dispatch = store.dispatch;
