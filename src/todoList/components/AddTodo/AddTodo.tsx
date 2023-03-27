
import React, { useState, useEffect } from 'react'
import { addNote, clearUpdateTodo, updateNote } from '../../../store/slices/TodoSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './AddTodo.css';
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

export const AddTodo = () => {

  const [getTodo, setGetTodo] = useState('');
  const dispatch = useAppDispatch();
  const {editTodo} = useAppSelector(state => state.todo);

  useEffect(() => {
    if (editTodo.note !== '') {
      setGetTodo(editTodo.note);
    } else {
      setGetTodo('');
    }
  }, [editTodo]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
    setGetTodo(e.target.value);
  }

  const onTodo = ()=>{

    if(getTodo === ''){
      return Swal.fire('You should add a task', 'Try again', 'error')
    };

    if(getTodo.length > 18){
      return Swal.fire("there's too many characters", 'Try again', 'error')
    }

    dispatch(addNote(
        {
          id: Math.round(Math.random()*10000), 
          note: getTodo,
          done: false
        }
      ))
    
    setGetTodo('');

  }

  const onEditTodo = ()=>{
    dispatch(updateNote({id: editTodo.id,note: getTodo}))
    setGetTodo('')
    dispatch(clearUpdateTodo());
  }

  return (
    <>
    
        <div className='add-content'>
            <input type="text" onChange={onChange} value={getTodo}/>

            {
              editTodo.note === '' ? <button onClick={onTodo}>Add</button>: 
                <button onClick={onEditTodo}>Update</button>
            }

        </div>
    
    </>
  )
}
