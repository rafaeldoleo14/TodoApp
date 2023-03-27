
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

export interface deleteAction {
    id: number,
}

export interface updateAction {
    id: number;
    note: string,
}

export interface doneTodo {
    id: number,
    done: boolean;
}