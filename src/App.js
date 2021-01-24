import React from 'react'
import './App.css'
import {Route} from "react-router-dom";
import MyData from "./components/MyData/MyData";
import MyPostsContainer from "./components/MyPosts/MyPostsContainer";
import MyCommentsContainer from "./components/MyComments/MyCommentsContainer";
import MyAlbumsContainer from "./components/MyAlbums/MyAlbumsContainer";
import MyPhotosContainer from "./components/MyPhotos/MyPhotosContainer";
import MyTodosContainer from "./components/MyTodos/MyTodosContainer";
import MyUsersContainer from "./components/MyUsers/MyUsersContainer";


function App() {
    return <div className="container">
        <div className={"navbar"}>
           <MyData/>
        </div>
           <div className="wrapper">
               <Route path={'/posts'} render={() => <MyPostsContainer/>}/>
               <Route path={'/comments'} render={() => <MyCommentsContainer/>}/>
               <Route path={'/albums'} render={() => <MyAlbumsContainer/>}/>
               <Route path={'/photos'} render={() => <MyPhotosContainer/>}/>
               <Route path={'/todos'} render={() => <MyTodosContainer/>}/>
               <Route path={'/users'} render={() => <MyUsersContainer/>}/>
           </div>
    </div>
}

export default App;