import React from 'react'
import styles from "../MyComments/MyComments.module.css";

const MyPhotos = (props) => {
     return <div>
        {props.photos.map(t => <div key={t.id} className={styles.comment}>
            <h3>Photo from user: {t.albumId}</h3>
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