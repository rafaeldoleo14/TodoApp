import React from 'react'
import './Main.css';
import {FiEdit} from 'react-icons/fi';
import {AiTwotoneDelete} from 'react-icons/ai'
import { AddTodo } from '../AddTodo/AddTodo';
import { TableTodo } from '../TableTodo/TableTodo';

export const Main = () => {
  return (
    <div className='main-container'>

        <div className='todo-content'>
            
            <h1>Todo List</h1>

            <AddTodo/>

            <TableTodo/>

        </div>

    </div>
  )
}
