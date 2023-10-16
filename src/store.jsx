import { configureStore } from '@reduxjs/toolkit'
import generalSlice from './store/generalSlice'

export const store = configureStore({
  reducer: {
    general: generalSlice
  }
})