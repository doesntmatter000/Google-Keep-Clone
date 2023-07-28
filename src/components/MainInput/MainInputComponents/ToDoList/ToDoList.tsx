import { useRef } from "react";
import { ToDoCard } from "./ToDoCard/ToDoCard";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
import "./ToDoList.scss";
import { FinishedTodos } from "./FinishedTodos/FinishedTodos";
import { useAppSelector, useAppDispatch } from "../../../../store/hook";
import { updateTodosState } from "../../../../store/Slices/mainInputSlice";

type ToDoListProps = {
  toDoState: boolean;
};


export const ToDoList = ({ toDoState }: ToDoListProps) => {
  const Dispatch = useAppDispatch()
  const parentRef = useRef<HTMLDivElement>(null);
  const todos = useAppSelector(state => state.mainInputState.todos)
  const handleDrop = (results: any) => {
    const { source, destination, type } = results
    if (!destination) return

    if (source.droppableId === destination.droppableId && source.index === destination.index) return

    if (type === "group") {
      const reorderedState = [...todos]
      const sourceIndex = source.index
      const destinationIndex = destination.index
      const [removedState] = reorderedState.splice(sourceIndex, 1)
      reorderedState.splice(destinationIndex, 0, removedState)
      Dispatch(updateTodosState(reorderedState))
    }
  }
  return (
    <>
      {toDoState && (<>
        <div className="Todo">
          <DragDropContext onDragEnd={handleDrop}>
            <div className="Todo__wrapper" ref={parentRef}>
              <Droppable droppableId="ROOT" type="group">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {todos.map((todo, index) =>
                      !todo.finished &&
                      (<Draggable draggableId={todo.id} key={todo.id} index={index}>
                        {(provided) => (
                          <ToDoCard
                            providedRef={provided.innerRef}
                            providedDragH={provided.dragHandleProps}
                            providedDrag={provided.draggableProps}
                            tabIndex={index}
                            key={todo.id}
                            id={todo.id}
                          />
                        )}
                      </Draggable>
                      ))}
                    {provided.placeholder}
                  </div>)}
              </Droppable>
            </div>
          </DragDropContext>
        </div>
        <FinishedTodos />
      </>
      )}
    </>
  )

};
