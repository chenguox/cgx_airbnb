import { getHomeDiscountData, getHomeGoodPriceData, getHomeHighScoreData } from '@/services/module/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// createAsyncThunk + extraReducers
// export const fetchHomeDataAction = createAsyncThunk('fetchdata', 
//   async (payload, { dispatch }) => {
//     const res = await getHomeGoodPriceData()
//     return res
//   }
// )

export const fetchHomeDataAction = createAsyncThunk('fetchdata', (payload, { dispatch }) => {
    getHomeGoodPriceData().then(res => {
      dispatch(changeGoodPriceInfoAction(res))
    })

    getHomeHighScoreData().then(res => {
      dispatch(changeHighScoreInfoAction(res))
    })

    getHomeDiscountData().then(res => {
      dispatch(changeDiscountInfoAction(res))
    })
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    highScoreInfo: {},
    discountInfo: {}
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
    }
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
    //     state.goodPriceInfo = payload
    //   })
  },
})

export const { changeGoodPriceInfoAction, changeHighScoreInfoAction, changeDiscountInfoAction } = homeSlice.actions

export default homeSlice.reducer
