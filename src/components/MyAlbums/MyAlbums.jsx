import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";

const MyAlbums = (props) => {
       const newAlbumId = React.createRef()
       const newAlbumTitle = React.createRef()


       const onAddAlbum = () => {
       let id = newAlbumId.current.value
       let title = newAlbumTitle.current.value
       props.addAlbum({id, title})
       props.sendAlbum({id, title})
       newAlbumId.current.value = ''
       newAlbumTitle.current.value = ''
   }
       return <div>
       <div className={styles.addItem}>
           <div className={styles.subInput}>Id:<input className={styles.input}
               ref={newAlbumId}
               value={props.newText}
           /></div>
           <div className={styles.subInput}>Title:<input className={styles.input}
               ref={newAlbumTitle}
               value={props.newText}
           /></div>
           <button className={styles.button} onClick={onAddAlbum}>Add Album</button>
       </div>

       <h1>Albums</h1>
        {props.albums.map(t => <div key={t.id} className={styles.comment}>
            <h3> {t.userId == 1 ? 'Album from user: 1' : 'My Album'}</h3>
            <div><span className={styles.bold}>Comment_Id: </span> {t.id}</div>
            <div><span className={styles.bold}>Title: </span> {t.title}</div>
        </div>)}
    </div>
}

export default MyAlbums