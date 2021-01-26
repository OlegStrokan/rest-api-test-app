import {dataAPI} from "../api/api";

const SET_ALBUMS = 'SET_ALBUMS'

let initialState = {
    albums: []
}

const albumsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ALBUMS: {
            return {...state, albums: action.albums}
        }

        default: return state
    }
}

export const setAlbums = (albums) => ({type: SET_ALBUMS, albums})

export const getAlbums = () => {
    return (dispatch) => {
        dataAPI.getAlbums().then(response => {
            dispatch(setAlbums(response))
        })
    }
}

export default albumsReducer