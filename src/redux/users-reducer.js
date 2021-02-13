import {dataAPI, myDataAPI} from "../api/api";

const SET_USERS = 'SET_USERS'
const ADD_USER = 'ADD_USER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [],
    userId: null,
    name: null,
    username: null,
    email: null,
    address: null,
    phone: null,
    website: null,
    company: null,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case ADD_USER: {
            debugger
            let newUser = {
                userId: 2,
                name: action.name,
                username: action.username,
                email: action.email,
                address: action.address,
                phone: action.phone,
                website: action.website,
                company: action.company
            }
            let stateCopy = {
                ...state,
                users: [newUser, ...state.users]
            }
            return stateCopy
        }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        default: return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const addUser = ({name, username, email, address, phone, website, company}) =>
    ({type: ADD_USER, name, username, email, address, phone, website, company})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getUsers = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dataAPI.getUsers().then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response))
        })
    }
}
export const sendUser = (user) => {
    return (dispatch) => {
        myDataAPI.sendUser(user).then(response => console.log(response))
    }
}

export default usersReducer