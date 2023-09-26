import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { mainStateToggle, changeBackColor, changeBackImage, imgStateToggle, toggleToDo } from "../../store/Slices/mainInputSlice";
import { uploadImg } from "../../store/Slices/imgSlice";
import { AddNote, getNotes } from "../../store/Slices/NoteData";
export const useToggleMainInput = (MainRef?: React.RefObject<HTMLDivElement>) => {

    const dispatch = useAppDispatch()
    useEffect(() => {
        let handler = (e: Event) => {
            if (MainRef) {
                if (!MainRef.current?.contains(e.target as Node)) {
                    dispatch(AddNote())
                    dispatch(mainStateToggle(false))
                    dispatch(imgStateToggle(false))
                    dispatch(uploadImg(null))
                    dispatch(changeBackColor("var(--bg-color)"))
                    dispatch(changeBackImage("null"))
                    dispatch(toggleToDo(false))
                    dispatch(getNotes())
                }
            }
        }
        document.addEventListener("mousedown", handler)

        return () => document.removeEventListener("mousedown", handler)
    })

    const closeMainInput = () => {
        dispatch(AddNote())
        dispatch(mainStateToggle(false))
        dispatch(imgStateToggle(false))
        dispatch(uploadImg(null))
        dispatch(changeBackColor("var(--bg-color)"))
        dispatch(changeBackImage("null"))
        dispatch(toggleToDo(false))
        dispatch(getNotes())
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