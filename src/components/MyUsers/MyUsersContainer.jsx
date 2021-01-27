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
    userId: state.usersPage.userId,
    name: state.usersPage.name,
    username: state.usersPage.username,
    email: state.usersPage.email,
    address: state.usersPage.address,
    phone: state.usersPage.phone,
    website: state.usersPage.website,
    company: state.usersPage.company,
})


export default connect(mapStateToProps,{getUsers, sendUser, addUser})(MyUsersContainer)