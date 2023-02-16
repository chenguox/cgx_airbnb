import { configureStore } from "@reduxjs/toolkit";
import homeReducer from './module/home'
import entireReducer from './module/entire'
import detailReducer from './module/detail'
import mainReducer from './module/main'

const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detail: detailReducer,
    main: mainReducer
  },
  devTools: true
})

export default store