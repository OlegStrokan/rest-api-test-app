import {applyMiddleware, combineReducers, createStore} from "redux"
import thunkMiddleware from "redux-thunk"
import albumsReducer from "./albums-reducer";
import postsReducer from "./posts-reducer";
import commentsReducer from "./comments-reducer";
import photosReducer from "./photos-reducer";
import todosReducer from "./todos-reducers";
import usersReducer from "./users-reducer";
import loginReducer from "./logins-reducer";

let reducers = combineReducers({
    postsPage: postsReducer,
    albumsPage: albumsReducer,
    commentsPage: commentsReducer,
    photosPage: photosReducer,
    todosPage: todosReducer,
    usersPage: usersReducer,
    loginPage: loginReducer

})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store