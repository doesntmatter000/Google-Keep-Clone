import { configureStore } from '@reduxjs/toolkit'
import { imgSlice } from './features/imgSlice'

const store = configureStore({
    reducer: {
        imgSlice: imgSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store