import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { mainStateToggle, changeBackColor, changeBackImage, imgStateToggle, toggleToDo } from "../../store/Slices/mainInputSlice";
import { uploadImg } from "../../store/Slices/imgSlice";
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
                    dispatch(toggleToDo(false))
                }
            }
        }
        document.addEventListener("mousedown", handler)
    })

    const closeMainInput = () => {
        dispatch(mainStateToggle(false))
        dispatch(imgStateToggle(false))
        dispatch(uploadImg(null))
        dispatch(changeBackColor("white"))
        dispatch(changeBackImage("none"))
        dispatch(toggleToDo(false))
    }
    const openMainInput = () => {
        dispatch(mainStateToggle(true))
    }

    const toggleToDoState = (a:boolean) => {
        dispatch(toggleToDo(a))
        dispatch(mainStateToggle(true))
    }

    let imgToggleMainOpen = useAppSelector(state => state.mainInputState.imgState)
    let mainState = useAppSelector(state => state.mainInputState.mainState)
    let toDoState = useAppSelector(state => state.mainInputState.toDoListState)

    return { imgToggleMainOpen, mainState, closeMainInput, openMainInput, toggleToDoState, toDoState }
}