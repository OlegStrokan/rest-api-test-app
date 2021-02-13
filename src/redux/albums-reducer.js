import {dataAPI, myDataAPI} from "../api/api";

const SET_ALBUMS = 'SET_ALBUMS'
const ADD_ALBUM = 'ADD_ALBUM'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    albums: [],
    userId: null,
    id: null,
    title: null,
    newText: '',
    isFetching: true
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
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching}
        default: return state
    }
}

export const setAlbums = (albums) => ({type: SET_ALBUMS, albums})
export const addAlbum = ({id, title}) => ({type: ADD_ALBUM, id, title})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export const getAlbums = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dataAPI.getAlbums().then(response => {
            dispatch(toggleIsFetching(false))
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