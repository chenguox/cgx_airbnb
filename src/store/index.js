import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './module/home'
import entireReducer from './module/entire'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer
  }
})

export default store