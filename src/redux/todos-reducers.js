import {dataAPI, myDataAPI} from "../api/api";

const SET_TODOS = 'SET_TODOS'
const ADD_TODO = 'ADD_TODO'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    todos: [],
    userId: null,
    id: null,
    completed: null,
    title: null,
    url: null,
    newText: '',
    isFetching: true
}

const todosReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_TODOS: {
            return {...state, todos: action.todos}
        }
        case ADD_TODO: {
            let newTodo = {
                userId: 2,
                id: action.id,
                completed: action.completed,
                title: action.title,
                url: action.url
            }
            let stateCopy = {
                ...state,
                todos: [newTodo, ...state.todos]
            }
            return stateCopy
        }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        default: return state
    }
}

export const setTodos = (todos) => ({type: SET_TODOS, todos})
export const addTodo = ({id, completed, title}) => ({type: ADD_TODO, id, completed, title})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getTodos = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dataAPI.getTodos().then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setTodos(response))
        })
    }
}

export const sendTodo = (todo) => {
    return (dispatch) => {
        myDataAPI.sendTodo(todo).then(response => console.log(response))
    }
}

export default todosReducer