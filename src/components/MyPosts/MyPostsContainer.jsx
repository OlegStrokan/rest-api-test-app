import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getPosts} from "../../redux/posts-reducer";

class MyPostsContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts()
    }


    render() {
        return <MyPosts posts={this.props.posts}/>
    }
}


let mapStateToProps = (state) => ({
    posts: state.postsPage.posts,

})


export default connect(mapStateToProps,{getPosts})(MyPostsContainer)