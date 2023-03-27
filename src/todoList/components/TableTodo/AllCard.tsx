
import React from 'react'
import { AiTwotoneDelete } from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { todoProp } from '../../../types/tableTodo'
import { useActionTodo } from '../../hooks/useActionTodo'

export const AllCard = (todo: todoProp) => {

    const {deleteTodo, updateTodo, doneTodo} = useActionTodo();

    return (
        <>

            <tr key={todo.id}>
                <td>

                    <p className={`${todo.done ? 'active' : ''}`}
                        onDoubleClick={() => doneTodo(todo.id, todo.done)}>
                        {todo.note}
                    </p>

                    <div className='action-icons'>

                        {
                            todo.done ? <></> :
                            <FiEdit size={20} cursor='pointer' onClick={() => updateTodo(todo.id, todo.note)} />

                        }

                        <AiTwotoneDelete size={20} cursor='pointer' onClick={() => deleteTodo(todo.id)} />

                    </div>

                </td>
            </tr>

        </>
    )
}
