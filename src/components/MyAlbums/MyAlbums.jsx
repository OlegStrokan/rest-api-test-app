import React from 'react'
import styles from "../MyComments/MyComments.module.css";

const MyAlbums = (props) => {
   return <div>
        {props.albums.map(t => <div key={t.id} className={styles.comment}>
            <h3>Album from user: {t.userId}</h3>
            <div><span className={styles.bold}>Comment_Id: </span> {t.id}</div>
            <div><span className={styles.bold}>Title: </span> {t.title}</div>
        </div>)}
    </div>
}

export default MyAlbums