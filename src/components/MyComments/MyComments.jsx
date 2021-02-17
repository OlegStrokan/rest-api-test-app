import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";
import Preloader from "../common/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";

let AddCommentForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.subInput}>Id:<Field  className={styles.input} name='Comment_id' component="input"/></div>
        <div className={styles.subInput}>Name:<Field  className={styles.input} name='Name' component="input"/></div>
        <div className={styles.subInput}>Email: <Field  className={styles.input} name='Email' component="input"/></div>
        <div className={styles.subInput}>Body: <Field  className={styles.input} name='Body' component="input"/></div>
        <button className={styles.button}>Add Post</button>
    </form>
}

AddCommentForm = reduxForm({form: 'AddComment'})(AddCommentForm)

const MyComments = (props) => {

    const onSubmit = (values) => {
        props.addComment({id: values.Comment_id, name: values.Name, email: values.Email, body: values.Body})
        props.sendComment({id: values.Comment_id, name: values.Name, email: values.Email, body: values.Body})
    }

    return <div>
            <div className={styles.addItem}>
               <AddCommentForm onSubmit={onSubmit}/>
            <h1>Comments</h1>
        {props.isFetching ? <Preloader/> : null}
            {props.comments.map(t => <div key={t.id} className={styles.comment}>
                <h3> {t.postId == 1 ? 'Comment from user: 1' : 'My Comment'}</h3>
                <div><span className={styles.bold}>Comment_Id: </span> {t.id}</div>
                <div><span className={styles.bold}>Name: </span> {t.name}</div>
                <div><span className={styles.bold}>Email: </span> {t.email}</div>
                <div><span className={styles.bold}>Body: </span> {t.body}</div>
            </div>)}
        </div>
    </div>
}

export default MyComments