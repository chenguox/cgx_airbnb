import {
  getHomeDiscountData,
  getHomeGoodPriceData,
  getHomeHighScoreData,
  getHomeHotRecommendData,
  getHomeLongforData,
} from '@/services/module/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// createAsyncThunk + extraReducers
// export const fetchHomeDataAction = createAsyncThunk('fetchdata',
//   async (payload, { dispatch }) => {
//     const res = await getHomeGoodPriceData()
//     return res
//   }
// )

export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  (payload, { dispatch }) => {
    getHomeGoodPriceData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreData().then((res) => {
      dispatch(changeHighScoreInfoAction(res))
    })

    getHomeDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res))
    })

    getHomeHotRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res))
    })

    getHomeLongforData().then((res) => {
      dispatch(changeLongforInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {},
    recommendInfo: {},
    longforInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recommendInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    }
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
    //     state.goodPriceInfo = payload
    //   })
  },
})

export const {
  changeGoodPriceInfoAction,
  changeHighScoreInfoAction,
  changeDiscountInfoAction,
  changeRecommendInfoAction,
  changeLongforInfoAction
} = homeSlice.actions

export default homeSlice.reducer
