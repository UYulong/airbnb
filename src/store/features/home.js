import { getGoodPriceList, getHighScoreList } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoodPriceListDataAction = createAsyncThunk('goodPrice', (payload, { dispatch }) => {
  getGoodPriceList().then(res => {
    dispatch(changeGoodPriceListAction(res))
  })

  getHighScoreList().then(res => {
    dispatch(changeHighScoreListAction(res))
  })
})

const homeSlice = createSlice({
  name: 'home',

  initialState: {
    goodPriceList: {},
    highScoreList: {},
  },

  reducers: {
    changeGoodPriceListAction(state, { payload }) {
      state.goodPriceList = payload
    },

    changeHighScoreListAction(state, { payload }) {
      state.highScoreList = payload
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

export const { changeGoodPriceListAction, changeHighScoreListAction } = homeSlice.actions

export default homeSlice.reducer