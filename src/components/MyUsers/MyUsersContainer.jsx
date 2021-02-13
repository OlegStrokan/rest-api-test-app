import React from 'react'
import {connect} from "react-redux";
import {addUser, getUsers, sendUser} from "../../redux/users-reducer";
import MyUsers from "./MyUsers";

class MyUsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers()
    }
    render() {
        return <MyUsers users={this.props.users}
                        addUser={this.props.addUser}
                        sendUser={this.props.sendUser}
        />
    }
}


let mapStateToProps = (state) => ({
    users: state.usersPage.users,
})


export default connect(mapStateToProps,{getUsers, sendUser, addUser})(MyUsersContainer)