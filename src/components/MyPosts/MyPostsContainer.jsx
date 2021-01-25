import React from 'react'
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {getPosts, setCurrentPage, setPosts} from "../../redux/posts-reducer";

class MyPostsContainer extends React.Component {
    componentDidMount() {
        this.props.getPosts(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getPosts(pageNumber, this.props.pageSize)
    }

    render() {
        return <MyPosts posts={this.props.posts}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        totalPostsCount={this.props.totalPostsCount}
                        onPageChanged={this.onPageChanged}/>
    }
}


let mapStateToProps = (state) => ({
    posts: state.postsPage.posts,
    pageSize: state.postsPage.pageSize,
    totalPostsCount: state.postsPage.totalPostsCount,
    currentPage: state.postsPage.currentPage
})


export default connect(mapStateToProps,{setPosts, getPosts, setCurrentPage})(MyPostsContainer)