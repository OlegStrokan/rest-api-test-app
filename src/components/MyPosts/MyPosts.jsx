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
import Post from "./Post/Post";

const MyPosts = (props) => {

    const newPostId = React.createRef()
    const newPostTitle = React.createRef()
    const newPostBody = React.createRef()

    const onAddPost = () => {
        debugger
        props.addPost()
    }

    let onPostId = () => {
        let posts_id = newPostId.current.value
        props.updateNewPostText(posts_id)
    }

    let onPostTitle = () => {
        let title = newPostTitle.current.value
        props.updateNewPostText(title)
    }

    let onPostBody = () => {
        let body = newPostBody.current.value
        props.updateNewPostText(body)
    }


    return <div>
        <div className={styles.addItem}>
            <div>Add post's Id<input onChange={onPostId}
                           ref={newPostId}
                           value={props.newPostText}
           /></div>
            <div>Add post's Title<input onChange={onPostTitle}
                           ref={newPostTitle}
                           value={props.newPostText}
           /></div>
            <div>Add post's Body<input onChange={onPostBody}
                           ref={newPostBody}
                           value={props.newPostText}
           /></div>
            <button className={styles.button} onClick={onAddPost}>Add Post</button>
        </div>

            <h1>My posts</h1>

        {props.posts.map(t => <div key={t.id} className={styles.post}>
            <h3>Post from user: {t.userId}</h3>
            <div><span className={styles.bold}>Posts_Id:</span> {t.id}</div>
            <div><span className={styles.bold}>Title:</span> {t.title}</div>
            <div><span className={styles.bold}>Body:</span> {t.body}</div>
        </div>)}

    </div>
}

export default MyPosts


