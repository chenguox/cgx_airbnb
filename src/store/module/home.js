import { getHomeGoodPriceData } from '@/services/module/home'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// createAsyncThunk + extraReducers
export const fetchHomeDataAction = createAsyncThunk(
  'fetchdata',
  async (payload) => {
    const res = await getHomeGoodPriceData()
    return res
  }
)

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
        state.goodPriceInfo = payload
        console.log('payload: ', payload)
      })
  },
})

export const { changeGoodPriceInfoAction } = homeSlice.actions

export default homeSlice.reducer
