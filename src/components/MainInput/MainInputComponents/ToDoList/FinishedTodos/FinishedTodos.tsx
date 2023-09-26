import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { ToDoCard } from "../ToDoCard/ToDoCard";
import { useState } from "react";
import "./FinishedTodos.scss"
import { todoapp } from "../../../../../store/Slices/mainInputSlice";

type FinishedTodosProps = {
  todos: todoapp[]
}

export const FinishedTodos = ({todos}:FinishedTodosProps) => {

  const [showTodos, setShowTodos] = useState<boolean>(true)
  const fTodos = todos.filter(todo => todo.finished === true)


  return (
    <>
      {fTodos.length > 0 && (<div className="FinishedTodos">
        <div className="FTitle__wrapper"  onClick={() => setShowTodos(!showTodos)}>
          <div className="FTitle__icon" style={showTodos ? { rotate: "180deg" } : { rotate: "initial" }}>
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
          <div className="FTitle__title">{`${fTodos.length}`} articol finalizat</div>
        </div>

        {showTodos &&
          fTodos.map((todo, index) => (
            <ToDoCard
              tabIndex={index}
              key={todo.id}
              id={todo.id}
            />
          ))}
      </div>)}
    </>

  )
}
