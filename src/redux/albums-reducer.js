import {dataAPI, myDataAPI} from "../api/api";

const SET_ALBUMS = 'SET_ALBUMS'
const ADD_ALBUM = 'ADD_ALBUM';

let initialState = {
    albums: [],
    userId: null,
    id: null,
    title: null,
    newText: ''
}

const albumsReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_ALBUMS: {
            return {...state, albums: action.albums}
        }
        case ADD_ALBUM: {
            let newAlbum = {
                userId: 2,
                id: action.id,
                title: action.title
            }
            let stateCopy = {
                ...state,
                albums: [newAlbum, ...state.albums]
            }
            return stateCopy
        }
        default: return state
    }
}

export const setAlbums = (albums) => ({type: SET_ALBUMS, albums})
export const addAlbum = ({id, title}) => ({type: ADD_ALBUM, id, title})

export const getAlbums = () => {
    return (dispatch) => {
        dataAPI.getAlbums().then(response => {
            dispatch(setAlbums(response))
        })
    }
}
export const sendAlbum = (comment) => {
    return (dispatch) => {
        myDataAPI.sendAlbum(comment).then(response => console.log(response))
    }
}

export default albumsReducer