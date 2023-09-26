import { NoteData } from '../../store/Slices/NoteData';

import { configureStore } from '@reduxjs/toolkit'
import { imgSlice } from '../../store/Slices/imgSlice'
import { NavigationTitles } from '../../store/Slices/NavigationTitles'
import { mainInputState } from '../../store/Slices/mainInputSlice'
import { popupSideNavbarSlice } from '../../store/Slices/popupSideNavbarSlice'

const store = configureStore({
    reducer: {
        NavigationTitles: NavigationTitles.reducer,
        imgSlice: imgSlice.reducer,
        mainInputState: mainInputState.reducer,
        popupSideNavbarSlice: popupSideNavbarSlice.reducer,
        NoteData: NoteData.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store