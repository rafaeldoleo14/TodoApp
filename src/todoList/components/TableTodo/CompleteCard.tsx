
import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { todoProp } from '../../../types/tableTodo';
import { useActionTodo } from '../../hooks/useActionTodo'


export const CompleteCard = (todo: todoProp) => {

    const {deleteTodo, doneTodo} = useActionTodo();

  return (
    <>
    
        <tr key={todo.id}>
            
            <td> 

                <p className={`${todo.done ? 'active' : ''}`} 
                    onDoubleClick={()=> doneTodo(todo.id, todo.done)}>
                        {todo.note}
                </p>

                <div className='action-icons'>

                    <AiTwotoneDelete size={20} cursor='pointer' onClick={()=> deleteTodo(todo.id)}/>

                </div>

            </td>
        </tr>  
    
    </>
  )
}
