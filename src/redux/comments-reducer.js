import {dataAPI} from "../api/api";

const SET_COMMENTS = 'SET_COMMENTS'
const SET_CURRENT_PAGE = 'SET-COMMENTS-PAGE'
const SET_COMMENTS_TOTAL_COUNT = 'SET-COMMENTS-TOTAL-COUNT'


let initialState = {
    comments: [],
    pageSize: 5,
    totalCommentsCount: 0,
    currentPage: 1
}

const commentReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_COMMENTS: {
            return {...state, comments: action.comments}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_COMMENTS_TOTAL_COUNT: {
            return {...state, totalCommentsCount: action.count}
        }

        default: return state
    }
}

export const setComments = (comments) => ({type: SET_COMMENTS, comments})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setCommentsTotalCount = (totalCommentsCount) => ({type: SET_COMMENTS_TOTAL_COUNT, count: totalCommentsCount })

export const getComments = (currentPage, pageSize) => {
    return (dispatch) => {
        dataAPI.getComments(currentPage, pageSize).then(response => {
            dispatch(setComments(response))
            dispatch(setCommentsTotalCount(response.length))
        })
    }
}

export default commentReducer