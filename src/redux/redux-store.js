import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import albumsReducer from "./albums-reducer";
import postsReducer from "./posts-reducer";
import commentsReducer from "./comments-reducer";
import photosReducer from "./photos-reducer";
import todosReducer from "./todos-reducers";
import usersReducers from "./users-reducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    albumsPage: albumsReducer,
    commentsPage: commentsReducer,
    photosPage: photosReducer,
    todosPage: todosReducer,
    usersPage: usersReducers

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store