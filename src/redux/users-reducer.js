import {dataAPI} from "../api/api";

const SET_USERS = 'SET_USERS'

let initialState = {
    users: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS: {
            return {...state, users: action.users}
        }
        default: return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})

export const getUsers = () => {
    return (dispatch) => {
        dataAPI.getUsers().then(response => {
            dispatch(setUsers(response))
        })
    }
}

export default postsReducer