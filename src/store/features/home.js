import { getGoodPriceList } from "@/services/modules/home";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoodPriceListDataAction = createAsyncThunk('goodPrice', async () => {
  const res = await getGoodPriceList()
  return res
})

const homeSlice = createSlice({
  name: 'home',

  initialState: {
    goodPriceList: {},
  },

  reducers: {
    changeGoodPriceListAction(state, { payload }) {
      state.goodPriceList = payload
    }
  },

  // extraReducers(builder) {
  //   builder.addCase('')
  // }
  extraReducers: {
    [fetchGoodPriceListDataAction.fulfilled](state, { payload }) {
      state.goodPriceList = payload
    }
  }
})

export const { changeGoodPriceListAction } = homeSlice.actions

export default homeSlice.reducer