import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './module/home'
import entireReducer from './module/entire'
import detailReducer from './module/detail'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer
  },
  devTools: true
})

export default store