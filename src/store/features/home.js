import { getGoodPriceList, getHighScoreList, getDiscountList } from "@/services/modules/home";
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
})

const homeSlice = createSlice({
  name: 'home',

  initialState: {
    goodPriceList: {},
    highScoreList: {},
    discountList: {},
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

export const { changeGoodPriceListAction, changeHighScoreListAction, changeDiscountListAction } = homeSlice.actions

export default homeSlice.reducer