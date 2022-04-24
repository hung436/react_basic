import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../views/AdminPage/adminSlice";
import userReducer from "../views/Auth/userSlice";
import cartReducer from "../views/Cart/cartSlice";
const rootReducer = {
  admin: adminReducer,
  user: userReducer,
  cart: cartReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
export const dispatch = store.dispatch;
