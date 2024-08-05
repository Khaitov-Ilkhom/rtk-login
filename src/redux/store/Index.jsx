import {configureStore} from "@reduxjs/toolkit";
import {reducer as authReducer} from "../slices/AuthSlice.jsx";
import {api} from "../api/Index.jsx";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(api.middleware)
})

export default store;