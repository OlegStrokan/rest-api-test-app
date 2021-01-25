import {dataAPI} from "../api/api";

const SET_POSTS = 'SET_POSTS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_POSTS_TOTAL_COUNT = 'SET-POSTS-TOTAL-COUNT'


let initialState = {
    posts: [],
    pageSize: 5,
    totalPostsCount: 0,
    currentPage: 1
}

const postsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_POSTS: {
            return {...state, posts: action.posts}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_POSTS_TOTAL_COUNT: {
            return {...state, totalPostsCount: action.count}
        }

        default: return state
    }
}

export const setPosts = (posts) => ({type: SET_POSTS, posts})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setPostsTotalCount = (totalPostsCount) => ({type: SET_POSTS_TOTAL_COUNT, count: totalPostsCount })

export const getPosts = (currentPage, pageSize) => {
    return (dispatch) => {
        dataAPI.getPosts(currentPage, pageSize).then(response => {
            dispatch(setPosts(response))
            dispatch(setPostsTotalCount(response.length))
        })
    }
}

export default postsReducer