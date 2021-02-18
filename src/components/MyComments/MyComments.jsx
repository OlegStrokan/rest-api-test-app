import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";
import Preloader from "../common/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import {
    Input, maxLengthBody, maxLengthEmail,
    maxLengthId,
    maxLengthName,
    minLengthBody, minLengthEmail,
    minLengthName
} from "../../utils/validators/length-validators";
import {required} from "../../utils/validators/validators";

let AddCommentForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.subInput}>Id:
            <Field  className={styles.input} name='Comment_id'
                    component={Input} validate={[required, maxLengthId]}/></div>
        <div className={styles.subInput}>Name:
            <Field  className={styles.input} name='Name'
                    component={Input} validate={[required, maxLengthName, minLengthName]}/></div>
        <div className={styles.subInput}>Email:
            <Field  className={styles.input} name='Email'
                    component={Input} validate={[required, maxLengthEmail, minLengthEmail]}/></div>
        <div className={styles.subInput}>Body:
            <Field  className={styles.input} name='Body'
                    component={Input} validate={[required, maxLengthBody, minLengthBody]}/></div>
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