
import React from 'react'
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'
import { clearCompleted } from '../../../store/slices/TodoSlice';
import { Props } from '../../../types/tableTodo';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

export const TableControl = (props: Props) => {

    const {notes, completeNotes} = useAppSelector(state => state.todo);
    const dispatch = useAppDispatch();

    const onClearCompleted = ()=>{
        dispatch(clearCompleted());
        if(completeNotes.length !== 0){
            dispatch(clearCompleted());
            Swal.fire('Succesful','' ,'success')
        }
    }

    return (
        <>

            <div className='table-control'>

                <p>{props.selectCompleted ? completeNotes.length : notes.length} items left</p>

                <div>
                    <button onClick={props.allTodo} className={`${props.selectCompleted ? '' : 'isActive'}`}>All</button>
                    <button onClick={props.completedTodo} className={`${props.selectCompleted ? 'isActive' : 'i'}`}>Completed</button>
                </div>

                <button onClick={onClearCompleted}>Clear Completed</button>

            </div>

        </>
    )
}
