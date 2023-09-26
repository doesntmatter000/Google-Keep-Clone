import { useState, useEffect, useRef } from "react"
import "./NotesCard.scss"

type NoteCardProps = {
    content: string
    changeNoteTitle: (text:string) => void
}

export const NoteCardTitle = ({content, changeNoteTitle}:NoteCardProps) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [titleValue, setTitleValue] = useState(content)

    const handleEnter = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter') e.preventDefault()
    }

    const handleEvent = (e: any,defaultHeight: string) => {
        e.target.style.height = defaultHeight;
        e.target.style.height = `${e.target.scrollHeight}px`;
        setTitleValue(e.target.value)
        changeNoteTitle(e.target.value)
    };

    const setHeight = (e:React.RefObject<HTMLTextAreaElement>) => {
        e.current!.style.height = `${e.current?.scrollHeight}px`
    }
    useEffect(() => {
        return setHeight(textareaRef)
    })
    
    return (
        <div className="NoteCard__Title">
            <textarea
                ref={textareaRef}
                onChange={(e) => handleEvent(e, "49px")}
                onKeyDown={event => handleEnter(event)}
                placeholder="Titlu"
                value={titleValue}
            />
        </div>
    )
}
