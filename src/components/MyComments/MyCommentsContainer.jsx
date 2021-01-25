import React from 'react'
import MyComments from "./MyComments";
import {connect} from "react-redux";
import {getComments, setCurrentPage, setComments} from "../../redux/comments-reducer";

class MyCommentsContainer extends React.Component {
    componentDidMount() {
        this.props.getComments(this.props.currentPage, this.props.pageSize)
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getComments(pageNumber, this.props.pageSize)
    }

    render() {
        return <MyComments comments={this.props.comments}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           totalCommentsCount={this.props.totalCommentsCount}
                           onPageChanged={this.onPageChanged}/>
    }
}


let mapStateToProps = (state) => ({
    comments: state.commentsPage.comments,
    pageSize: state.commentsPage.pageSize,
    totalCommentsCount: state.commentsPage.totalCommentsCount,
    currentPage: state.commentsPage.currentPage
})


export default connect(mapStateToProps,{setComments, getComments, setCurrentPage})(MyCommentsContainer)