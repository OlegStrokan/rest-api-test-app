import {dataAPI} from "../api/api";

const SET_POSTS = 'SET_POSTS'
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [],
    post_from_user: null,
    post_id: null,
    title: null,
    body: null,
    newPostText: 'Add some text',
}

const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_POSTS: {
            return {...state, posts: action.posts}
        }
        case ADD_POST: {
            let newPost = {
                post_from_user: 1,
                post_id: state.post_id,
                title: state.title,
                body: state.body
            }
            debugger
            // добавляем новый пост в state
            let stateCopy = {
                ...state,
                posts: [...state.posts, newPost]
            }
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {
                ...state,
                post_id: action.post_id,
                title: action.title,
                body: action.body,
            }
            return stateCopy
        }

        default: return state
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = ({ post_id, title, body}) =>
    ({type: UPDATE_NEW_POST_TEXT,  post_id, title, body})


export const getPosts = () => {
    return (dispatch) => {
        dataAPI.getPosts().then(response => {
            dispatch(setPosts(response))
        })
    }
}

export default postsReducer