
import { configureStore } from '@reduxjs/toolkit'
import { imgSlice, mainInputState } from './features'

const store = configureStore({
    reducer: {
        imgSlice: imgSlice.reducer,
        mainInputState: mainInputState.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store