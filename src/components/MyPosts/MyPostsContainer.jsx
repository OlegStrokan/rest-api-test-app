import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, getPosts, updateNewPostText} from "../../redux/posts-reducer";

class MyPostsContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }


    render() {
        return <MyPosts posts={this.props.posts}
                        addPost={this.props.addPost}
                        updateNewPostText={this.props.updateNewPostText}/>
    }
}


let mapStateToProps = (state) => ({
    posts: state.postsPage.posts,
    post_from_user: state.postsPage.post_from_user,
    post_id: state.postsPage.post_id,
    title: state.postsPage.title,
    body: state.postsPage.body,
    newPostText: state.postsPage.newPostText
})


export default connect(mapStateToProps,{getPosts, addPost, updateNewPostText})(MyPostsContainer)