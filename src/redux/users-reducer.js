import {dataAPI, myDataAPI} from "../api/api";

const SET_USERS = 'SET_USERS'
const ADD_USER = 'ADD_USER';

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
}

const usersReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case ADD_USER: {
            let newUser = {
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
        default: return state
    }
}

export const setUsers = (users) => ({type: SET_USERS, users})
export const addUser = ({name, username, email, address, phone, website, company}) =>
    ({type: ADD_USER, name, username, email, address, phone, website, company})

export const getUsers = () => {
    return (dispatch) => {
        dataAPI.getUsers().then(response => {
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