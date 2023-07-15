import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { mainStateToggle, imgStateToggle, uploadImg, changeBackColor, changeBackImage } from "../../store/features";
export const useToggleMainInput = (MainRef?: React.RefObject<HTMLDivElement>) => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        let handler = (e: Event) => {
            if (MainRef) {
                if (!MainRef.current?.contains(e.target as Node)) {
                    dispatch(mainStateToggle(false))
                    dispatch(imgStateToggle(false))
                    dispatch(uploadImg(null))
                    dispatch(changeBackColor("white"))
                    dispatch(changeBackImage("none"))
                }
            }
        }
        document.addEventListener("mousedown", handler)
    })

    const closeMainInput = () => {
        dispatch(mainStateToggle(false))
    }
    const openMainInput = () => {
        dispatch(mainStateToggle(true))
    }

    

    let imgToggleMainOpen = useAppSelector(state => state.mainInputState.imgState)
    let mainState = useAppSelector(state => state.mainInputState.mainState)

    return { imgToggleMainOpen, mainState, closeMainInput, openMainInput }
}