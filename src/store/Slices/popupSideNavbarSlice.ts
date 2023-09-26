import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

type mainInputState = {
    statePopup: boolean
}

const initialState: mainInputState = {
    statePopup: false
}

export const popupSideNavbarSlice = createSlice({
    name: "popupSideNavbarSlice",
    initialState,
    reducers: {
        mainStatePopupToggle: (state, action: PayloadAction<boolean>) => {
            state.statePopup = action.payload
        }
    }
})

export default popupSideNavbarSlice.reducer
export const { mainStatePopupToggle } = popupSideNavbarSlice.actions