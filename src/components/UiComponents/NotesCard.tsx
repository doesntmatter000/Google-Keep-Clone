import { Note } from "../../store/Slices/NoteData"
import { NoteCardTitle } from "./NoteCardTitle"
import { useState, useEffect, useRef } from "react"
import "./NotesCard.scss"

type NoteCardProps = {
  id: string
  notes: Note[]
}
export const NotesCard = ({ id, notes }: NoteCardProps) => {
  const [stateNoteCard, setStateNoteCard] = useState<boolean>(false)
  const NoteCardRef = useRef<any>(null)
  const toggleState = () => {
    if (stateNoteCard === false) setStateNoteCard(true)
  }

  let indexNote: number
  let thisNote: Note | undefined = notes.find((note: Note, index: number) => {
    if (note.id === id) {
      indexNote = index
      return true
    }
  })

  console.log(stateNoteCard);
  

  useEffect(() => {
    let handler = (e: Event) => {
        if (NoteCardRef) {
            if (!NoteCardRef.current?.contains(e.target as Node)) {
              setStateNoteCard(false)
        }
    }
    document.addEventListener("mousedown", handler)

    return () => document.removeEventListener("mousedown", handler)
}})

  const changeNoteTitle = (text: string) => {
    thisNote!.title = text
    notes.splice(indexNote, 1)
    notes.splice(indexNote, 0, thisNote!)
    localStorage.setItem("Notes", JSON.stringify([...notes]))
  }

  return (
      <div className="NoteCard" onClick={() => toggleState()} ref={NoteCardRef}>
        {thisNote?.backImage && (
          <div className="ImgWrapper">
            <img className="ImgWrapper__img" src={thisNote?.backImage as string} alt="NoteCardImage" />
          </div>
        )}
        {(thisNote?.title || stateNoteCard) && (
        <NoteCardTitle content={thisNote!.title} changeNoteTitle={changeNoteTitle} />
        )}
      </div>
  )
}
