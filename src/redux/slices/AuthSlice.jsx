import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: localStorage.getItem('token') || null,
}

const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.token = null;
      localStorage.removeItem('token');
    },
    signInSlice: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    },
    singUpSlice: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
    }
  }
})

export const {reducer} = authSlice
export const {logOut, signInSlice, singUpSlice} = authSlice.actions;