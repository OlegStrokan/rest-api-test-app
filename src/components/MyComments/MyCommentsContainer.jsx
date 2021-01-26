import React from 'react'
import MyComments from "./MyComments";
import {connect} from "react-redux";
import {getComments} from "../../redux/comments-reducer";

class MyCommentsContainer extends React.Component {
    componentDidMount() {
        this.props.getComments()
    }
    render() {
        return <MyComments comments={this.props.comments}/>
    }
}


let mapStateToProps = (state) => ({
    comments: state.commentsPage.comments
})


export default connect(mapStateToProps,{getComments})(MyCommentsContainer)