import { getGoodPriceList, getHighScoreList, getDiscountList, getHotDestList } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoodPriceListDataAction = createAsyncThunk('goodPrice', (payload, { dispatch }) => {
  getGoodPriceList().then(res => {
    dispatch(changeGoodPriceListAction(res))
  })

  getHighScoreList().then(res => {
    dispatch(changeHighScoreListAction(res))
  })

  getDiscountList().then(res => {
    dispatch(changeDiscountListAction(res))
  })

  getHotDestList().then(res => {
    dispatch(changeHotRecommendListAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',

  initialState: {
    goodPriceList: {},
    highScoreList: {},
    discountList: {},
    hotRecommendList: {},
  },

  reducers: {
    changeGoodPriceListAction(state, { payload }) {
      state.goodPriceList = payload
    },

    changeHighScoreListAction(state, { payload }) {
      state.highScoreList = payload
    },

    changeDiscountListAction(state, { payload }) {
      state.discountList = payload
    },

    changeHotRecommendListAction(state, { payload }) {
      state.hotRecommendList = payload
    }
  },

  // extraReducers(builder) {
  //   builder.addCase('')
  // }
  // extraReducers: {
  //   [fetchGoodPriceListDataAction.fulfilled](state, { payload }) {
  //     state.goodPriceList = payload
  //   }
  // }
})

export const { changeGoodPriceListAction, changeHighScoreListAction, changeDiscountListAction, changeHotRecommendListAction } = homeSlice.actions

export default homeSlice.reducer