import React from 'react'
import MyComments from "./MyComments";
import {connect} from "react-redux";
import {addComment, getComments, sendComment} from "../../redux/comments-reducer";

class MyCommentsContainer extends React.Component {
    componentDidMount() {
        this.props.getComments()
    }
    render() {
        return <MyComments comments={this.props.comments}
                           addComment={this.props.addComment}
                           sendComment={this.props.sendComment}
                           isFetching={this.props.isFetching}
        />
    }
}


let mapStateToProps = (state) => ({
    comments: state.commentsPage.comments,
    isFetching: state.commentsPage.isFetching
})


export default connect(mapStateToProps,{getComments, addComment, sendComment})(MyCommentsContainer)