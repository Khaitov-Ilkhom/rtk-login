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
    }
  }
})

export const {reducer} = authSlice
export const {logOut} = authSlice.actions;