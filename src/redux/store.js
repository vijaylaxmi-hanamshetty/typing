import { configureStore } from '@reduxjs/toolkit'
import typingTestReducer from "./feature/TypeingTestSlice"
export const store = configureStore({
  reducer: {
    typingTest:typingTestReducer
  },
})