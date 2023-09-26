import { UpdateNoteTitle } from "../../../../../../store/Slices/NoteData";
import { useAppDispatch, useAppSelector } from "../../../../../../store/hook";

export const TitleInput = () => {
  const dispatch = useAppDispatch()
  let Title = useAppSelector(state => state.NoteData.title)
  const handleEvent = (e: React.ChangeEvent<HTMLTextAreaElement>,defaultHeight: string) => {
    e.target.style.height = defaultHeight;
    e.target.style.height = `${e.target.scrollHeight}px`;
    dispatch(UpdateNoteTitle(e.target.value))
  };

  const handleInput = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') e.preventDefault()
  }

  return (
    <>
      <textarea
        onChange={(event) => handleEvent(event, "25px")}
        className="Tcomponent__title-text"
        onKeyDown={event => handleInput(event)}
        placeholder="Titlu"
        value={Title}
      />
    </>
  );
};
