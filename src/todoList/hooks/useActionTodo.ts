
import React from 'react'
import { deleteNote, doneNote, updateNote } from '../../store/slices/TodoSlice';
import { useAppDispatch } from './hooks';

export const useActionTodo = () => {

    const dispatch = useAppDispatch();

    const deleteTodo = (id: number)=>{
        dispatch(deleteNote({id}))
    }

    const updateTodo = (id: number, note: string)=>{
        dispatch(updateNote({id, note}))
    }

    const doneTodo = (id: number, done: boolean)=>{
        dispatch(doneNote({id, done}))
    }

    return{
        deleteTodo,
        updateTodo,
        doneTodo
    }

}
