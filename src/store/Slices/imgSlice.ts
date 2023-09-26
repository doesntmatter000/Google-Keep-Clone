import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"

type ImgState = {
    imgUploaded: string | null | ArrayBuffer
}

const initialState: ImgState = {
    imgUploaded: null
}

export const imgSlice = createSlice({
    name: "img",
    initialState,
    reducers: {
        uploadImg: (state, action: PayloadAction<string | null | ArrayBuffer>) => {
            state.imgUploaded = action.payload
        }
    }
})

export default imgSlice.reducer
export const { uploadImg } = imgSlice.actions