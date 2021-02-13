import {dataAPI, myDataAPI} from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS'
const ADD_COMMENT = 'ADD_COMMENT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    comments: [],
    postId: null,
    id: null,
    name: null,
    email: null,
    body: null,
    newText: '',
    isFetching: true
}

const commentsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_COMMENTS: {
            return {...state, comments: action.comments}
        }
        case ADD_COMMENT: {
            let newComment = {
                postId: 2,
                id: action.id,
                name: action.name,
                email: action.email,
                body: action.body
            }
            let stateCopy = {
                ...state,
                comments: [newComment, ...state.comments]
            }
            return stateCopy
        }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        default: return state
    }
}

export const setComments = (comments) => ({type: SET_COMMENTS, comments})
export const addComment = ({id, name, email, body}) => ({type: ADD_COMMENT, id, name, email, body})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getComments = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dataAPI.getComments().then(response => {
            dispatch(toggleIsFetching(false))
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