import React from 'react'
import {connect} from "react-redux";
import {getUsers} from "../../redux/users-reducer";
import MyUsers from "./MyUsers";

class MyUsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }
    render() {
        return <MyUsers users={this.props.users}/>
    }
}


let mapStateToProps = (state) => ({
    users: state.usersPage.users
})


export default connect(mapStateToProps,{getUsers})(MyUsersContainer)