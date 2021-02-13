import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";
import Preloader from "../common/Preloader/Preloader";

const MyPhotos = (props) => {

    const newPhotoId = React.createRef()
    const newPhotoTitle = React.createRef()
    const newPhotoJobLink = React.createRef()
    const newPhotoDiscussionLink = React.createRef()


    const onAddPhoto = () => {
        let id = newPhotoId.current.value
        let title = newPhotoTitle.current.value
        let url = newPhotoJobLink.current.value
        let thumbnailUrl = newPhotoDiscussionLink.current.value
        props.addPhoto({id, thumbnailUrl, title, url})
        props.sendPhoto({id, thumbnailUrl, title, url})
        newPhotoId.current.value = ''
        newPhotoTitle.current.value = ''
        newPhotoJobLink.current.value = ''
        newPhotoDiscussionLink.current.value = ''
    }
     return <div>
         <div className={styles.addItem}>
             <div className={styles.subInput}>Id:<input className={styles.input}
                 ref={newPhotoId}
                 value={props.newText}
             /></div>
             <div className={styles.subInput}>Title:<input className={styles.input}
                 ref={newPhotoTitle}
                 value={props.newText}
             /></div>
             <div className={styles.subInput}>Link for discussion:<input className={styles.input}
                 ref={newPhotoJobLink}
                 value={props.newText}
             /></div>
             <div className={styles.subInput}>Link for job:<input className={styles.input}
                 ref={newPhotoDiscussionLink}
                 value={props.newText}
             /></div>
             
             <button className={styles.button} onClick={onAddPhoto}>Add Photo</button>
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