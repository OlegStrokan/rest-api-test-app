import {dataAPI} from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS'

let initialState = {
    comments: [],
}

const commentReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_COMMENTS: {
            return {...state, comments: action.comments}
        }
        default: return state
    }
}

export const setComments = (comments) => ({type: SET_COMMENTS, comments})

export const getComments = () => {
    return (dispatch) => {
        dataAPI.getComments().then(response => {
            dispatch(setComments(response))
        })
    }
}

export default commentReducer