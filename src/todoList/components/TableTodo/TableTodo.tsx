import React, { useState } from 'react'
import './TableTodo.css'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { completedNotes } from '../../../store/slices/TodoSlice'
import { CompleteCard } from './CompleteCard'
import { AllCard } from './AllCard'
import { TableControl } from './TableControl'

export const TableTodo = () => {

    const {notes, completeNotes} = useAppSelector(state => state.todo);
    const [selectCompleted, setSelectCompleted] = useState(false);
    const dispatch = useAppDispatch();

    const completedTodo = ()=>{
        dispatch(completedNotes());
        setSelectCompleted(true);
    }

    const allTodo = ()=>{
        setSelectCompleted(false);
    }

    return (
    <>
    
        <table>

            <tbody>

                {

                    selectCompleted ?  completeNotes.map((todo)=>(

                        <CompleteCard key={todo.id} {...todo}/>

                    )) :

                    notes.map((todo)=>(

                        <AllCard key={todo.id} {...todo}/>

                    ))

                }

            </tbody>

        </table>

        <div className='line'>
            <hr/>
        </div>

        <TableControl completedTodo={completedTodo} allTodo={allTodo} selectCompleted={selectCompleted}/>
    
    </>
  )
}
