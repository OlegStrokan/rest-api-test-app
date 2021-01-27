import {dataAPI, myDataAPI} from "../api/api";

const SET_POSTS = 'SET_POSTS'
const ADD_POST = 'ADD-POST';

let initialState = {
    posts: [],
    userId: null,
    id: null,
    title: null,
    body: null,
    newText: ''
}

const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_POSTS: {
            return {...state, posts: action.posts}
        }
        case ADD_POST: {
            let newPost = {
                userId: 2,
                id: action.id,
                title: action.title,
                body: action.body
            }
            let stateCopy = {
                ...state,
                posts: [newPost, ...state.posts]
            }
            return stateCopy
        }
        default: return state
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const addPost = ({id, title, body}) => ({type: ADD_POST, id, title, body})

export const getPosts = () => {
    return (dispatch) => {
        dataAPI.getPosts().then(response => {
            dispatch(setPosts(response))
        })
    }
}
export const sendPost = (post) => {
    return (dispatch) => {
        myDataAPI.sendPost(post).then(response => console.log(response))
    }
}

export default postsReducer