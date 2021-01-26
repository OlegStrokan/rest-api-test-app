import {dataAPI} from "../api/api";

const SET_TODOS = 'SET_TODOS'
let initialState = {
    todos: []
}

const todosReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_TODOS: {
            return {...state, todos: action.todos}
        }

        default: return state
    }
}

export const setTodos = (todos) => ({type: SET_TODOS, todos})

export const getTodos = () => {
    return (dispatch) => {
        dataAPI.getTodos().then(response => {
            dispatch(setTodos(response))
        })
    }
}

export default todosReducer