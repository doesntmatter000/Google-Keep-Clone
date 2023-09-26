import React from "react";
import "./MainInput.scss";
import { useAppDispatch, useAppSelector } from "../../../../store/hook";
import { UpdateNoteText } from "../../../../store/Slices/NoteData";
type openMainInputProps = {
  openMainInput: Function;
};

export const MainInput = ({ openMainInput }: openMainInputProps) => {
    const dispatch = useAppDispatch()
    let InputText:string = useAppSelector(state => state.NoteData.text)
    const handleEvent = (e:React.ChangeEvent<HTMLTextAreaElement>, defaultHeight: string) => {
      e.currentTarget.style.height = defaultHeight;
      e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
      if (e.currentTarget.value !== null) {
      dispatch(UpdateNoteText(e.currentTarget.value))
      }
    };

    

  return (
    <div className="MainInput__wrapper">
      <textarea
        onChange={(event) => handleEvent(event, "49px")}
        className="Main__input"
        onClick={() => openMainInput()}
        placeholder="Creeaza o notă..."
        value={InputText}
      ></textarea>
    </div>
  );
};
