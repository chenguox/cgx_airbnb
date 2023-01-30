import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './module/home'
import entireReducer from './module/entire'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  },
  devTools: true
})

export default store