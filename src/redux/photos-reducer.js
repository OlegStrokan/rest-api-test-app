import {dataAPI} from "../api/api";

const SET_PHOTOS = 'SET_PHOTOS'
let initialState = {
    photos: []
}

const photosReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_PHOTOS: {
            return {...state, photos: action.photos}
        }

        default: return state
    }
}

export const setPhotos = (photos) => ({type: SET_PHOTOS, photos})

export const getPhotos = () => {
    return (dispatch) => {
        dataAPI.getPhotos().then(response => {
            dispatch(setPhotos(response))
        })
    }
}

export default photosReducer