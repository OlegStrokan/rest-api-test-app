import {dataAPI} from "../api/api";

const SET_POSTS = 'SET_POSTS'

let initialState = {
    posts: []
}

const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_POSTS: {
            return {...state, posts: action.posts}
        }

        default: return state
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, posts})

export const getPosts = () => {
    return (dispatch) => {
        dataAPI.getPosts().then(response => {
            dispatch(setPosts(response))
        })
    }
}

export default postsReducer