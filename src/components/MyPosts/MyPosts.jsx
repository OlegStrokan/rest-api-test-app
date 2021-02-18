import React from 'react'
import styles from './MyPosts.module.css'
import Preloader from "../common/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {
    maxLengthId,
    maxLengthTitle,
    maxLengthBody,
    minLengthBody,
    minLengthTitle, Input}
    from "../../utils/validators/length-validators";


let AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.subInput}>Id:
            <Field  className={styles.input} name='Post_Id'
                    component={Input} validate={[required, maxLengthId]}/></div>
        <div className={styles.subInput}>Title:
            <Field  className={styles.input} name='Title'
                    component={Input} validate={[required, maxLengthTitle, minLengthTitle]}/></div>
        <div className={styles.subInput}>Body:
            <Field  className={styles.input} name='Body'
                    component={Input} validate={[required, maxLengthBody, minLengthBody]}/></div>
        <button className={styles.button}>Add Post</button>
    </form>
}

AddPostForm = reduxForm({form: 'AddPost'})(AddPostForm)

const MyPosts = (props) => {

    const onSubmit = (values) => {
        props.addPost({id: values.Post_Id, title: values.Title, body: values.Body})
        props.sendPost({id: values.Post_Id, title: values.Title, body: values.Body})
    }

    return <div>
        <div className={styles.addItem}>
        <AddPostForm onSubmit={onSubmit}/>
        </div>
        <h1>Posts</h1>
        {props.isFetching ? <Preloader/> : null}
        {props.posts.map(t => <div key={t.id} className={styles.post}>
            <h3> {t.userId === 1 ? 'Post from user: 1' : 'My Post'}</h3>
            <div><span className={styles.bold}>Posts_Id:</span> {t.id}</div>
            <div><span className={styles.bold}>Title:</span> {t.title}</div>
            <div><span className={styles.bold}>Body:</span> {t.body}</div>
        </div>)}
    </div>
}

export default MyPosts


