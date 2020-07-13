import {ADD_TODO,DELETE_TODO,EDIT_TODO} from './Todotype';

export const addTodo = (value) => {
    return {
        type: ADD_TODO,
        value
    }
}

export const deleteTodo = (id) => (
    {
        type: DELETE_TODO,
        id
    }
)
export const editTodo = (id) => (
    {
        type: EDIT_TODO,
        id
    }
)