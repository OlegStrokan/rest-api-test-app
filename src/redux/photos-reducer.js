import {dataAPI, myDataAPI} from "../api/api";

const SET_PHOTOS = 'SET_PHOTOS'
const ADD_PHOTOS = 'ADD_PHOTOS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    photos: [],
    albumId: null,
    id: null,
    thumbnailUrl: null,
    title: null,
    url: null,
    newText: '',
    isFetching: true
}

const photosReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PHOTOS: {
            return {...state, photos: action.photos}
        }
        case ADD_PHOTOS: {
            let newPhoto = {
                albumId: 2,
                id: action.id,
                thumbnailUrl: action.thumbnailUrl,
                title: action.title,
                url: action.url
            }
            let stateCopy = {
                ...state,
                photos: [newPhoto, ...state.photos]
            }
            return stateCopy
        }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        default: return state
    }
}

export const setPhotos = (photos) => ({type: SET_PHOTOS, photos})
export const addPhoto = ({id, thumbnailUrl, title, url}) => ({type: ADD_PHOTOS, id, thumbnailUrl, title, url})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const getPhotos = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dataAPI.getPhotos().then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setPhotos(response))
        })
    }
}
export const sendPhoto = (photo) => {
    return (dispatch) => {
        myDataAPI.sendPhoto(photo).then(response => console.log(response))
    }
}

export default photosReducer