import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { loginuser, registeruser } from '../../services/userService';
import { StorageKeys } from '../../constant/storage-key';

export const register = createAsyncThunk('auth/register', async (payload) => {
  //call API to register
  const data = await registeruser(payload);
  return data;
});

export const login = createAsyncThunk('auth/login', async (payload) => {
  //call API to login
  const data = await loginuser(payload);

  if (data.error === 0) {
    const user = {
      name: data.username,
      id: data.userID,
      access_token: data.accessToken,
      addressId: null,
      refreshToken: data.refreshToken,
    };
    //save data to local storage
    await localStorage.setItem(StorageKeys.TOKEN, data.accessToken);
    await localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
  }
  return data;
});

const initialState = {
  isLogin: false,
  modalIsOpen: false,
  current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: (state) => {
      state.modalIsOpen = false;
    },
    logout: (state) => {
      state.current = null;
      localStorage.removeItem(StorageKeys.TOKEN);
      localStorage.removeItem(StorageKeys.USER);
    },
    change: (state, action) => {
      state.current = action.payload;
      localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload));
    },
    refreshToken: (state, action) => {
      // sendToken
      alert(action.payload);
      state.current.access_token = action.payload;
      localStorage.setItem(StorageKeys.USER, JSON.stringify(action.payload));
    },
    addAddressId: (state, action) => {
      const user = {
        ...state.current,
        addressId: action.payload,
      };
      state.current = { ...user };
      localStorage.setItem(StorageKeys.USER, JSON.stringify(user));
    },
  },
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if (action.payload.error === 0) {
        let user = {
          name: action.payload.username,
          id: action.payload.userID,
          access_token: action.payload.accessToken,
        };

        state.current = user;
      }
    },
  },
});

export const {
  openModal,
  closeModal,
  logout,
  change,
  refreshToken,
  addAddressId,
} = userSlice.actions;

export default userSlice.reducer;
