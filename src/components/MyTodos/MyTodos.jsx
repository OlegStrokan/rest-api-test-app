import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";
import Preloader from "../common/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";

let AddTodoForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.subInput}>Id:
            <Field  className={styles.input} name='Todo_Id' component="input"/></div>
        <div className={styles.subInput}>Title:
            <Field  className={styles.input} name='Title' component="input"/></div>
        <div className={styles.subInput}>Completed (0 or 1):
            <Field  className={styles.input} name='IsComplete' component="input"/></div>
        <button className={styles.button}>Add Todo</button>
    </form>
}

AddTodoForm = reduxForm({form: 'AddPost'})(AddTodoForm)

const MyTodos = (props) => {

    const onSubmit = (values) => {
        props.addTodo({id: values.Todo_Id, title: values.Title, completed: values.IsComplete})
        props.sendTodo({id: values.Todo_Id, title: values.Title, completed: values.IsComplete})
    }

    return <div>
        <div className={styles.addItem}>
           <AddTodoForm onSubmit={onSubmit}/>
        </div>
        <h1>My Todos</h1>
        {props.isFetching ? <Preloader/> : null}
        {props.todos.map(t => <div key={t.id} className={styles.post}>
            <h3> {t.userId === 1 ? 'Todo from user: 1' : 'My Todo'}</h3>
            <div><span className={styles.bold}>Todos_id:</span> {t.id}</div>
            <div><span className={styles.bold}>Title:</span> {t.title}</div>
            <div><span className={styles.bold}>Completed:</span> {t.completed == true ? 'true' : 'false'}</div>
        </div>)}
    </div>
}

export default MyTodos