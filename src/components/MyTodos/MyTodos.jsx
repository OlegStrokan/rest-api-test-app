import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";
import Preloader from "../common/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import {
    Input,
    maxLengthCompleted,
    maxLengthId,
    maxLengthTitle,
    minLengthTitle
} from "../../utils/validators/length-validators";
import {required} from "../../utils/validators/validators";

let AddTodoForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.subInput}>Id:
            <Field  className={styles.input} name='Todo_Id'
                    component={Input} validate={[required, maxLengthId]}/></div>
        <div className={styles.subInput}>Title:
            <Field  className={styles.input} name='Title'
                    component={Input}  validate={[required, maxLengthTitle, minLengthTitle]}/></div>
        <div className={styles.subInput}>Completed (0 or 1):
            <Field  className={styles.input} name='IsComplete'
                    component={Input}  validate={[required, maxLengthCompleted]}/></div>
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