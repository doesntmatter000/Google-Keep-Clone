
import { configureStore } from '@reduxjs/toolkit'
import { imgSlice } from './Slices/imgSlice'
import { mainInputState } from './Slices/mainInputSlice'

const store = configureStore({
    reducer: {
        imgSlice: imgSlice.reducer,
        mainInputState: mainInputState.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store