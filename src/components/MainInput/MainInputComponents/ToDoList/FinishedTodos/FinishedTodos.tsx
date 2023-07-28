import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../../../../store/hook";
import { ToDoCard } from "../ToDoCard/ToDoCard";
import { useState } from "react";
import "./FinishedTodos.scss"

export const FinishedTodos = () => {

  const [showTodos, setShowTodos] = useState<boolean>(true)
  const fTodos = useAppSelector(state => state.mainInputState.todos.filter(todo => todo.finished === true))


  return (
    <>
      {fTodos.length > 0 ? (<div className="FinishedTodos">
        <div className="FTitle__wrapper"  onClick={() => setShowTodos(!showTodos)}>
          <div className="FTitle__icon" style={showTodos ? { rotate: "180deg" } : { rotate: "initial" }}>
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
          <div> {`${fTodos.length}`} articol finalizat</div>
        </div>

        {showTodos &&
          fTodos.map((todo, index) => (
            <ToDoCard
              tabIndex={index}
              key={todo.id}
              id={todo.id}
            />
          ))}

      </div>) : null}
    </>

  )
}
