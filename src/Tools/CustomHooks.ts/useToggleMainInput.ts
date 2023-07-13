import { useEffect, useState } from "react"
import { useAppSelector } from "../../store/hook";
export const useToggleMainInput = (MainRef:React.RefObject<HTMLDivElement>) => {

    const [mainIsOpen, setMainIsOpen] = useState(false);

    useEffect(() => {
        let handler = (e: Event) => {
            if (!MainRef.current?.contains(e.target as Node)) {
                setMainIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handler)
    })

    let imgToggleMainOpen = useAppSelector(state => state.imgSlice.imgUploaded) ? true : false
    
    return {mainIsOpen, setMainIsOpen, imgToggleMainOpen}
}
