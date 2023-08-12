import { configureStore } from '@reduxjs/toolkit'
import homeSliceReducer from './features/home'

const store = configureStore({
  reducer: {
    home: homeSliceReducer
  }
})

export default store