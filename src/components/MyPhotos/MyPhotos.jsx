import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";
import Preloader from "../common/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import {
    Input,
    maxLengthId, maxLengthLink,
    maxLengthTitle,
    minLengthLink,
    minLengthTitle
} from "../../utils/validators/length-validators";
import {required} from "../../utils/validators/validators";

let MyPhotosForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.subInput}>Id:
            <Field className={styles.input} name='Album_id'
                   component={Input} validate={[required, maxLengthId]}/></div>
        <div className={styles.subInput}>Title:
            <Field className={styles.input} name='Title'
                   component={Input} validate={[required, maxLengthTitle, minLengthTitle]}/></div>
        <div className={styles.subInput}>Link for job:
            <Field className={styles.input} name='Link_for_job'
                   component={Input} validate={[required, maxLengthLink, minLengthLink]}/></div>
        <div className={styles.subInput}>Link for discussion:
            <Field className={styles.input} name='Link_for_discussion'
                   component={Input} validate={[required, maxLengthLink, minLengthLink]}/></div>
        <button className={styles.button}>Add Photo</button>
    </form>
}

MyPhotosForm = reduxForm({form: 'AddPhoto'})(MyPhotosForm)

const MyPhotos = (props) => {

    let onSubmit = (values) => {
        props.addPhoto({id: values.Album_id, thumbnailUrl: values.Link_for_discussion,
                        title: values.Title, url: values.Link_for_job})
        props.sendPhoto({id: values.Album_id, thumbnailUrl: values.Link_for_discussion,
            title: values.Title, url: values.Link_for_job})
    }

     return <div>
         <div className={styles.addItem}>
             <MyPhotosForm onSubmit={onSubmit}/>
         </div>
         <h1>Photos</h1>
         {props.isFetching ? <Preloader/> : null}
        {props.photos.map(t => <div key={t.id} className={styles.comment}>
            <h3> {t.albumId == 1 ? 'Photo from user: 1' : 'My Photo'}</h3>
            <div><span className={styles.bold}>Album_Id: </span> {t.id}</div>
            <div><span className={styles.bold}>Title: </span> {t.title}</div>
            <div><span className={styles.bold}>Link for job: </span> {t.url}</div>
            <img src={t.url} className={styles.img}/>
            <div><span className={styles.bold}>Link for discussion: </span> {t.thumbnailUrl}</div>
            <img src={t.thumbnailUrl} className={styles.img}/>
        </div>)}
    </div>
}

export default MyPhotos