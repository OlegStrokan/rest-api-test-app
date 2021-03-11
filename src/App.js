import React from 'react'
import './App.css'
import {Route} from "react-router-dom";
import MyData from "./components/MyData/MyData";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";
import MyAlbumsContainer from "./components/MyAlbums/MyAlbumsContainer";
import MyPhotosContainer from "./components/MyPhotos/MyPhotosContainer";
import MyTodosContainer from "./components/MyTodos/MyTodosContainer";
import MyUsersContainer from "./components/MyUsers/MyUsersContainer";
import Start from "./components/Start/Start";
import LoginContainer from "./components/Login/LoginContainer";

const MyCommentsContainer = React.lazy(() => import('./components/MyComments/MyCommentsContainer'))

function App() {
    return <div className="container">
        <div className={"navbar"}>
            <MyData/>
        </div>
        <div className="wrapper">
            <Route path={'/posts'} render={() => <MyPostsContainer/>}/>
            <Route path={'/comments'} render={() =>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <MyCommentsContainer/>
                </React.Suspense>}/>
            <Route path={'/albums'} render={() => <MyAlbumsContainer/>}/>
            <Route path={'/photos'} render={() => <MyPhotosContainer/>}/>
            <Route path={'/todos'} render={() => <MyTodosContainer/>}/>
            <Route path={'/users'} render={() => <MyUsersContainer/>}/>
            <Route path={'/login'} render={() => <LoginContainer/>}/>
            <Route exact path={'/'} render={() => <Start/>}/>

        </div>
    </div>
}

export default App;