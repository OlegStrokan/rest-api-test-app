import React from 'react'
import MyTodos from "./MyTodos";
import {connect} from "react-redux";
import {getTodos} from "../../redux/todos-reducers"

class MyTodosContainer extends React.Component {
    componentDidMount() {
        this.props.getTodos()
    }


    render() {
        return <MyTodos todos={this.props.todos}/>
    }
}


let mapStateToProps = (state) => ({
    todos: state.todosPage.todos,

})


export default connect(mapStateToProps,{getTodos})(MyTodosContainer)