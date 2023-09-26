import "./ToDoList.scss";
import { FinishedTodos } from "./FinishedTodos/FinishedTodos";
import { useAppSelector } from "../../../../store/hook";
import { NewTodos } from "./NewTodos/NewTodos";

type ToDoListProps = {
  toDoState: boolean;
};

export const ToDoList = ({ toDoState }: ToDoListProps) => {


  const todos = useAppSelector(state => state.mainInputState.todos)

  return (
    <>
      {toDoState && (
      <>
        <NewTodos todos={todos} />
        <FinishedTodos todos={todos}/>
      </>
      )}
    </>
  )

};
