import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    homePage: 2
  },
  reducers: {}
})

export default homeSlice.reducer