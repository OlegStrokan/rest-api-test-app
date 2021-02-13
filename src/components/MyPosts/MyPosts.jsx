/*
import React from 'react'
import styles from './MyPosts.module.css'

const MyPosts = (props) => {

    let pagesCount = Math.ceil((props.totalPostsCount - 20) / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i)
    }

    return <div>
        <div className={styles.counter}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}><span className={styles.pages}>{p}</span></span>
            })}
        </div>
   <div>
        {props.posts.map(t => <div key={t.id} className={styles.post}>
            <h3>Post from user: {t.userId}</h3>
            <div><span className={styles.bold}>Posts_Id:</span> {t.id}</div>
            <div><span className={styles.bold}>Title:</span> {t.title}</div>
            <div><span className={styles.bold}>Body:</span> {t.body}</div>
        </div>)}
   </div>
    </div>
}

export default MyPosts*/


import React from 'react'
import styles from './MyPosts.module.css'
import Preloader from "../common/Preloader/Preloader";


const MyPosts = (props) => {
    const newPostId = React.createRef()
    const newPostTitle = React.createRef()
    const newPostBody = React.createRef()


    const onAddPost = () => {
        let id = newPostId.current.value
        let title = newPostTitle.current.value
        let body = newPostBody.current.value
        props.addPost({id, title, body})
        props.sendPost({id, title, body})
        newPostId.current.value = ''
        newPostTitle.current.value = ''
        newPostBody.current.value = ''
    }

    return <div>
        <div className={styles.addItem}>
            <div className={styles.subInput}>Id:<input className={styles.input}
                           ref={newPostId}
                           value={props.newText}
           /></div>
            <div className={styles.subInput}>Title:<input className={styles.input}
                           ref={newPostTitle}
                           value={props.newText}
           /></div>
            <div className={styles.subInput}>Body:<input className={styles.input}
                           ref={newPostBody}
                           value={props.newText}
           /></div>
            <button className={styles.button} onClick={onAddPost}>Add Post</button>
        </div>

            <h1>Posts</h1>
        {props.isFetching ? <Preloader/> : null}
        {props.posts.map(t => <div key={t.id} className={styles.post}>
            <h3> {t.userId == 1 ? 'Post from user: 1' : 'My Post'}</h3>
            <div><span className={styles.bold}>Posts_Id:</span> {t.id}</div>
            <div><span className={styles.bold}>Title:</span> {t.title}</div>
            <div><span className={styles.bold}>Body:</span> {t.body}</div>
        </div>)}
    </div>
}

export default MyPosts


