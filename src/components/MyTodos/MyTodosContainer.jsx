import React from 'react'
import MyTodos from "./MyTodos";
import {connect} from "react-redux";
import {getTodos, addTodo, sendTodo} from "../../redux/todos-reducers"

class MyTodosContainer extends React.Component {
    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        return <MyTodos todos={this.props.todos}
                        addTodo={this.props.addTodo}
                        sendTodo={this.props.sendTodo}
        />
    }
}


let mapStateToProps = (state) => ({
    todos: state.todosPage.todos,
    postId: state.postsPage.postId,
    id: state.postsPage.id,
    title: state.postsPage.title,
    completed: state.postsPage.completed,
    newText: state.postsPage.newText
})


export default connect(mapStateToProps,{getTodos, addTodo, sendTodo})(MyTodosContainer)