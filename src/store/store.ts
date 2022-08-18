import { configureStore } from '@reduxjs/toolkit'
import  itemsSlice from './reducers/itemsSlice'
const store = configureStore({
  reducer: {
    items:itemsSlice,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store