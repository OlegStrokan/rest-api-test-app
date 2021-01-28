import React from "react";
import styles from './Start.module.css'


const Start = () => {
    return <div className={styles.main}>
        <h1 className={styles.h1}>Documentation</h1>
        <div>REST API: <a className={styles.a}
                          href="https://jsonplaceholder.typicode.com">https://jsonplaceholder.typicode.com</a></div>
    <ul className={styles.ul}><h3>Endpoints</h3>
        <li>Get Post - <span className={styles.italic}>users/1/posts</span></li>
        <li>Get Comment - <span className={styles.italic}>posts/1/comments</span></li>
        <li>Get Albums - <span className={styles.italic}>users/1/albums</span></li>
        <li>Get Photos - <span className={styles.italic}>users/1/photos</span></li>
        <li>Get Todos - <span className={styles.italic}>users/1/todos</span></li>
        <li>Get Users - <span className={styles.italic}>users</span></li>
        <h3>You also can add your own post and send it on server.</h3>
        <h3>Your data always will have UserId: 2</h3>
    </ul>
    </div>
}

export default Start