import {dataAPI, myDataAPI} from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT';

let initialState = {
    comments: [],
    userId: null,
    id: null,
    name: null,
    email: null,
    body: null,
    newText: ''
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_COMMENTS: {
            return {...state, comments: action.comments}
        }
        case ADD_COMMENT: {
            let newComment = {
                userId: 2,
                id: action.id,
                name: action.name,
                email: action.name,
                body: action.body
            }
            let stateCopy = {
                ...state,
                comments: [newComment, ...state.comments]
            }
            return stateCopy
        }
        default: return state
    }
}

export const setComments = (comments) => ({type: SET_COMMENTS, comments})
export const addComment = ({id, name, email, body}) => ({type: ADD_COMMENT, id, name, email, body})

export const getComments = () => {
    return (dispatch) => {
        dataAPI.getComments().then(response => {
            dispatch(setComments(response))
        })
    }
}
export const sendComment = (comment) => {
    return (dispatch) => {
        myDataAPI.sendComment(comment).then(response => console.log(response))
    }
}

export default commentsReducer