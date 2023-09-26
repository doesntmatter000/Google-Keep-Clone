import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGripVertical, faXmark } from "@fortawesome/free-solid-svg-icons";
import { deleteTodo, finishTodo, addTodo, toggleTodoState, setTodoValue } from "../../../../../store/Slices/mainInputSlice";

import { useAppDispatch, useAppSelector } from "../../../../../store/hook";
import "./ToDoCard.scss";

type ToDoCardProps = {
  id: string;
  tabIndex: number,
  providedRef?: any
  providedDragH?: any
  providedDrag?: any
};



export const ToDoCard = ({ id, tabIndex, providedDrag, providedDragH, providedRef }: ToDoCardProps) => {
  const todo = useAppSelector(state => state.mainInputState.todos.filter(todo => todo.id === id)[0])
  const handleInputValue = (value: string) => {
    Dispatch(setTodoValue({ id, value }))
  }

  const Dispatch = useAppDispatch()
  const handleEvent = (e: React.FormEvent<HTMLTextAreaElement>, defaultHeight: string) => {
    e.currentTarget.style.height = defaultHeight;
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
    if (!todo.todoState) {
      if (e.currentTarget.value.length >= 1) {
        Dispatch(toggleTodoState({ id }))
        Dispatch(addTodo())
      }
    }
  };



  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>, currentIndex: number) => {
    let nextElement

    if ((e.key === "Backspace" || e.key === "Delete") && todo.todoState === true) {
      if (e.currentTarget.innerText.length === 0) {
        nextElement = document.querySelector(`[tabIndex="${currentIndex + 1}"]`) as HTMLInputElement;
        Dispatch(deleteTodo({ id }))
        nextElement?.focus();
      }
    }

    if (e.key === 'Enter') {
      e.preventDefault()
      nextElement = document.querySelector(`[tabIndex="${currentIndex + 1}"]`) as HTMLInputElement;
      nextElement?.focus();
    }

  }

  return (
    <div className="Card__wrapper" {...providedDrag} ref={providedRef}>
      <div className="Card__dndIcon" {...providedDragH} style={!todo.todoState || todo.finished ? { visibility: "hidden" } : { visibility: "visible" }}>
        <FontAwesomeIcon icon={faGripVertical} />
      </div>

      {!todo.todoState
        ? (<div className="Card__addToDoIcon">+</div>)

        : (<div className="Card__checkbox">
          <input type="checkbox" id="Card__checkbox" />
          <label htmlFor="Card__checkbox" onClick={() => Dispatch(finishTodo({ id }))}>
            {todo.finished && (<FontAwesomeIcon icon={faXmark} style={{ color: "#878f9b", }} />)}
          </label>
        </div>)
      }


      <textarea
        value={todo.value}
        placeholder="Articol din listă"
        style={todo.finished ? { textDecoration: "line-through" } : { display: "block" }}
        tabIndex={tabIndex}
        onKeyDown={event => handleKeyPress(event, tabIndex)}
        onChange={event => handleInputValue(event.currentTarget.value)}
        className={todo.todoState ? "Card__input" : "Card__inputoff"}
        onInput={(event) => handleEvent(event, "20px")}
      ></textarea>

      <div
        className="Card__deleteIcon wrapper__svg"
        onClick={() => Dispatch(deleteTodo({ id }))}
        style={!todo.todoState ? { display: "none" } : { display: "flex" }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </div>
    </div>
  );
};
