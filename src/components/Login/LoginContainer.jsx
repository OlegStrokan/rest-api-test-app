import React from 'react'
import {connect} from "react-redux";
import {checkData} from "../../redux/logins-reducer";
import Login from "./Login";
class LoginContainer extends React.Component {

    render() {
        return <Login checkData={this.props.checkData}

        />
    }
}

let mapStateToProps = (state) => ({

})

export default connect(mapStateToProps,{checkData})(LoginContainer)