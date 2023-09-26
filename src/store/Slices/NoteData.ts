import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { changeBackColor, updateTodosState, setTodoValue, finishTodo, addTodo} from "./mainInputSlice"
import { todoapp } from "./mainInputSlice"
import { uploadImg } from "./imgSlice"

export type Note = {
    text: string
    title: string
    backColor: string
    backImage: string | ArrayBuffer
    todos: todoapp[]
    id: string
    notes: Note[]
}

const initialState: Note = {
     text: "",
     title: "",
     backColor: "",
     backImage: "",
     todos: [],
     id: "",
     notes: JSON.parse(localStorage.getItem("Notes")!) === null ? [] : JSON.parse(localStorage.getItem("Notes")!)
}

export const NoteData = createSlice({
    name: "NavigationTitles",
    initialState,
    reducers: {
        UpdateNoteText: (state, action: PayloadAction<string>) => {
            state.text = action.payload
        },
        UpdateNoteTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload
        },
        UpdateNoteColor: (state, action: PayloadAction<string>) => {
            state.backColor = action.payload
        },
        getNotes: (state) => {
            if (state.notes.length !== JSON.parse(localStorage.getItem("Notes")!).length) {
            state.notes = JSON.parse(localStorage.getItem("Notes")!)
            }
        },
        AddNote: (state) => {
            if (state.text !== "" || state.todos.length > 0 || state.title !== "") {
            localStorage.setItem("Notes", JSON.stringify([{text: state.text, title: state.title, backColor: state.backColor, backImage: state.backImage, todos: state.todos, id: crypto.randomUUID()}, ...state.notes]))
            state.text = ""
            state.title = ""
            state.backColor = ""
            state.backImage = ""
            state.todos = []
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(changeBackColor, (state, action: PayloadAction<string>) => {
            if (action.payload !== "var(--bg-color)") {
            state.backColor = action.payload

            }
        });
        builder.addCase(uploadImg, (state, action: PayloadAction<string | null | ArrayBuffer>) => {
            state.backImage = action.payload!
        });
        builder.addCase(updateTodosState, (state, action: PayloadAction<todoapp[]>) => {
            state.todos = action.payload
        });
        builder.addCase(addTodo, (state) => {
            state.todos = [...state.todos, { id: crypto.randomUUID(), finished: false, todoState: false, value: "" }]
        });
        builder.addCase(setTodoValue, (state, action: PayloadAction<{ id: string, value: string }>) => {
            state.todos.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    todo.value = action.payload.value
                }
            });
        });
        builder.addCase(finishTodo, (state, action: PayloadAction<{ id: string }>) => {
            state.todos.forEach((todo) => {
                if (todo.id === action.payload.id) {
                    if (todo.finished === true) {
                        return
                    } else if (todo.finished === false) {
                        todo.finished = true;
                    }
                }
            });
        });
    },
})

export default NoteData.reducer
export const { UpdateNoteText, UpdateNoteTitle, AddNote, getNotes } = NoteData.actions