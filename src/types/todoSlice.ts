
export interface todoState {
    notes: {
        id: number,
        note: string,
        done: boolean
    }[],

    completeNotes: {
        id: number,
        note: string,
        done: boolean
    }[],

    editTodo: {
        id: number,
        note: string
    }
}

export interface todoAction {
    id: number,
    note: string,
    done: boolean
}

export type deleteAction = Pick<todoAction, 'id'>

export type updateAction = Pick<todoAction, 'id' | 'note'>

export type doneTodo = Pick<todoAction, 'id' | 'done'>