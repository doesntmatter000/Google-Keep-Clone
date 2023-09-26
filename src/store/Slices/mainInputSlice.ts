import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction"
import { uploadImg } from "./imgSlice"

type mainInputState = {
    mainState: boolean
    imgState: boolean,
    backcolor: string,
    backImage: string,
    optionsToggle: boolean,
    toDoListState: boolean
    todos: todoapp[]
}

export interface todoapp {
    id: string;
    finished: boolean;
    todoState: boolean;
    value: string
}

const initialState: mainInputState = {
    mainState: false,
    imgState: false,
    backcolor: "var(--bg-color)",
    backImage: "none",
    optionsToggle: false,
    toDoListState: false,
    todos: [{ id: crypto.randomUUID(), finished: false, todoState: false, value: "" }]

}

export const mainInputState = createSlice({
    name: "mainInput",
    initialState,
    reducers: {
        mainStateToggle: (state, action: PayloadAction<boolean>) => {
            state.mainState = action.payload
        },
        imgStateToggle: (state, action: PayloadAction<boolean>) => {
            state.imgState = action.payload
        },
        changeBackColor: (state, action: PayloadAction<string>) => {
            state.backcolor = action.payload
        },
        changeBackImage: (state, action: PayloadAction<string>) => {
            state.backImage = action.payload
            console.log(action.payload, "backImage lol");
        },
        toggleOptions: (state, action: PayloadAction<boolean>) => {
            state.optionsToggle = action.payload
        },
        toggleToDo: (state, action: PayloadAction<boolean>) => {
            state.toDoListState = action.payload
        },
        deleteTodo: (state, action: PayloadAction<{ id: string }>) => {
            state.todos = state.todos.filter((todo) => {
                return todo.id !== action.payload.id;
            })
        },
        updateTodosState: (state, action: PayloadAction<todoapp[]>) => {
            state.todos = action.payload
        },
        setTodoValue: (state, action: PayloadAction<{ id: string, value: string }>) => {
            state.todos.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.value = action.payload.value
                }
            });
        },
        finishTodo: (state, action: PayloadAction<{ id: string }>) => {
            state.todos.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    if (todo.finished === true) {
                        return
                    } else if (todo.finished === false) {
                        todo.finished = true;
                    }
                }
            });
        },
        toggleTodoState: (state, action: PayloadAction<{ id: string }>) => {
            state.todos.forEach(item => {
                if (item.id === action.payload.id) {
                    item.todoState = !item.todoState
                }
            })
        },
        addTodo: (state) => {
            state.todos = [...state.todos, { id: crypto.randomUUID(), finished: false, todoState: false, value: "" }]
        }
    },
    extraReducers: (builder) => {
        builder.addCase(uploadImg, (state, action: PayloadAction<string | null | ArrayBuffer>) => {
            action.payload === null ? state.imgState = false : state.imgState = true;
        });
    },
})

export default mainInputState.reducer
export const { mainStateToggle, imgStateToggle, changeBackColor, changeBackImage, toggleOptions, toggleToDo, addTodo, deleteTodo, finishTodo, setTodoValue, toggleTodoState, updateTodosState } = mainInputState.actions