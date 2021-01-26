import React from 'react'
import styles from '../MyPosts.module.css'

const Post = (props) => {
    debugger
    return <div className={styles.post}>
                <h2>Post from me: <span className={styles.bold}> {props.userId}</span></h2>
                <div>Posts_id: <span className={styles.bold}>{props.id}</span></div>
                <div>Posts title: <span className={styles.bold}>{props.title}</span></div>
                <div>Posts body: <span className={styles.bold}>{props.body}</span></div>
        </div>
}

export default Post