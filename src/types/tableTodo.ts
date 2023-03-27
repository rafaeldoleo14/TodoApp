
export interface todoProp {
    id: number,
    note: string,
    done: boolean
}

export interface Props {
    completedTodo: () => void;
    allTodo: () => void;
    selectCompleted: boolean
}