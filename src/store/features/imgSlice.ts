import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

type ImgState = {
    imgUploaded: string | null
}

const initialState: ImgState = {
    imgUploaded: null
}

export const imgSlice = createSlice({
    name: "img",
    initialState,
    reducers: {
        uploadImg: (state, action: PayloadAction<string>) => {
            state.imgUploaded = action.payload
        }
    }
})

export default imgSlice.reducer
export const { uploadImg } = imgSlice.actions