import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"

type State = {
    TitleData: {
        text: string
    }
}

const initialState: State = {
    TitleData: {
     text: "#",
    }
}

export const NavigationTitles = createSlice({
    name: "NavigationTitles",
    initialState,
    reducers: {
        changeTitle: (state, action: PayloadAction<{text:string}>) => {
            state.TitleData = action.payload
        }
    }
})

export default NavigationTitles.reducer
export const { changeTitle } = NavigationTitles.actions