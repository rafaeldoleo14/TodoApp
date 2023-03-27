
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { deleteAction, doneTodo, todoAction, todoState, updateAction } from '../../types/todoSlice'

const initialState: todoState = {
    notes: [],
    completeNotes: [],
    editTodo: {
        id: 0,
        note: ''
    }
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

        addNote: (state, action: PayloadAction<todoAction>) => {
            state.notes.push(action.payload)
        },

        deleteNote: (state, action: PayloadAction<deleteAction>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload.id)
            state.completeNotes = state.completeNotes.filter(note => note.id !== action.payload.id);
        },

        updateNote: (state, action: PayloadAction<updateAction>) => {
            state.editTodo = action.payload;
            state.notes.filter(note => {
                if (note.id === action.payload.id) {
                    note.note = action.payload.note;
                }
            })

        },

        clearUpdateTodo: (state) => {
            state.editTodo = { id: 0, note: '' }
        },

        doneNote: (state, action: PayloadAction<doneTodo>) => {

            const updatedNote = state.notes.find(note => note.id === action.payload.id);
            
            if (updatedNote) {
                updatedNote.done = !updatedNote.done;

                if (updatedNote.done === true) {
                    // agregar la nota actualizada a completeNotes
                    state.completeNotes.push({ ...updatedNote, done: true });
                } else {
                    // eliminar la nota actualizada de completeNotes y cualquier otra copia de la nota
                    state.completeNotes = state.completeNotes.filter(note => note.id !== updatedNote.id);
                    state.completeNotes.filter(note => note.id !== updatedNote.id);
                }
            }
        },

        completedNotes: (state) => {

            state.notes.filter(note => {

                if (note.done === true) {

                    let objetoExistente = state.completeNotes.some(objeto => objeto.id === note.id);

                    if (!objetoExistente) {
                        state.completeNotes.push(note);
                    }

                }

            })

        },

        clearCompleted: (state) => {

            state.notes = state.notes.filter(note => note.done !== true)
            state.completeNotes = state.completeNotes.filter(note => note.done !== true);

        }

    },
})

// Action creators are generated for each case reducer function
export const { addNote, deleteNote, updateNote, clearUpdateTodo, doneNote, completedNotes, clearCompleted } = todoSlice.actions

export default todoSlice.reducer