import { configureStore } from '@reduxjs/toolkit'
import topicSlice from './features/topicSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      topicSlice
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']