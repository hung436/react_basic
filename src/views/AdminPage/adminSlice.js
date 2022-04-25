import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginadmin } from "./../../services/apiService";
import { StorageKeys } from "./../../constant/storage-key";

export const login = createAsyncThunk("admin/login", async (payload) => {
  let username = payload.username;
  let password = payload.password;
  try {
    const data = await loginadmin(username, password);

    if (data.errorCode === 0) {
      localStorage.setItem(StorageKeys.ADMIN, JSON.stringify(data.user));
    }
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  isLoading: false,
  current: JSON.parse(localStorage.getItem(StorageKeys.ADMIN)) || null,
  // isAuth: false,
  error: "",
};
export const userSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    // loginStart: (state) => {
    //   state.login.isLoading = true;
    // },
    // loginSuccess: (state, action) => {
    //   state.login.isLoading = false;
    //   state.login.current = action.payload;
    // },
    // loginFail: (state) => {
    //   state.login.isLoading = false;
    //   state.login.error = true;
    // },
    adminLogout(state) {
      state.current = null;
      localStorage.removeItem(StorageKeys.ADMIN);
      state.error = false;
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if (action.payload.errorCode === 0) {
        state.current = action.payload.user;
      } else {
        state.current = null;
      }
    },
  },
});

export const { adminLogout, loginStart, loginFail, loginSuccess } =
  userSlice.actions;

export default userSlice.reducer;
