import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {addPost, getPosts, sendPost} from "../../redux/posts-reducer";

class MyPostsContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        return <MyPosts posts={this.props.posts}
                        addPost={this.props.addPost}
                        sendPost={this.props.sendPost}
        />
    }
}


let mapStateToProps = (state) => ({
    posts: state.postsPage.posts,
    postId: state.postsPage.postId,
    id: state.postsPage.id,
    title: state.postsPage.title,
    body: state.postsPage.body,
    newText: state.postsPage.newText
})


export default connect(mapStateToProps,{getPosts, addPost, sendPost})(MyPostsContainer)