import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";
import Preloader from "../common/Preloader/Preloader";
import {Field, reduxForm} from "redux-form";
import {required} from "../../utils/validators/validators";
import {
    Input,
    maxLengthId,
    maxLengthTitle,
    minLengthTitle
} from "../../utils/validators/length-validators";

let AddAlbumsForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.subInput}>Id:
            <Field  className={styles.input} name='Albums_Id'
                    component={Input}  validate={[required, maxLengthId]}/></div>
        <div className={styles.subInput}>Title:
            <Field  className={styles.input} name='Title'
                    component={Input}  validate={[required, maxLengthTitle, minLengthTitle]}/></div>
        <button className={styles.button}>Add Albums</button>
    </form>
}

AddAlbumsForm = reduxForm({form: 'AddPost'})(AddAlbumsForm)

const MyAlbums = (props) => {

    const onSubmit = (values) => {
        props.addAlbum({id: values.Albums_Id, title: values.Title})
        props.sendAlbum({id: values.Albums_Id, title: values.Title})
    }
       return <div>
       <div className={styles.addItem}>
         <AddAlbumsForm onSubmit={onSubmit}/>
       </div>
       <h1>Albums</h1>
           {props.isFetching ? <Preloader/> : null}
        {props.albums.map(t => <div key={t.id} className={styles.comment}>
            <h3> {t.userId == 1 ? 'Album from user: 1' : 'My Album'}</h3>
            <div><span className={styles.bold}>Comment_Id: </span> {t.id}</div>
            <div><span className={styles.bold}>Title: </span> {t.title}</div>
        </div>)}
    </div>
}

export default MyAlbums