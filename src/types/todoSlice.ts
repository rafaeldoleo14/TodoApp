
export interface todoAction {
    id: number,
    note: string,
    done: boolean
}

export interface todoState {
    notes: todoAction[],
    completeNotes: todoAction[],
    editTodo: Pick<todoAction, 'id' | 'note'>
}

export type deleteAction = Pick<todoAction, 'id'>

export type updateAction = Pick<todoAction, 'id' | 'note'>

export type doneTodo = Pick<todoAction, 'id' | 'done'>