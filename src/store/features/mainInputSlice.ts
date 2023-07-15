import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { uploadImg } from "."

type mainInputState = {
    mainState: boolean
    imgState: boolean,
    backcolor: string,
    backImage: string
}

const initialState: mainInputState = {
    mainState: false,
    imgState: false,
    backcolor: "#fff",
    backImage: "none"
}

export const mainInputState = createSlice({
    name: "mainInput",
    initialState,
    reducers: {
        mainStateToggle: (state, action: PayloadAction<boolean>) => {
            state.mainState = action.payload
        },
        imgStateToggle: (state, action: PayloadAction<boolean>) => {
            state.imgState = action.payload
        },
        changeBackColor: (state, action:PayloadAction<string>) => {
            state.backcolor = action.payload
        },
        changeBackImage: (state, action:PayloadAction<string>) => {
            state.backImage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImg, (state, action: PayloadAction<string | null>) => {
          action.payload === null ? state.imgState = false : state.imgState = true;
        });
      },
})

export default mainInputState.reducer
export const { mainStateToggle, imgStateToggle, changeBackColor, changeBackImage } = mainInputState.actions