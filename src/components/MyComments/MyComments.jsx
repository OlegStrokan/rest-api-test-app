import React from 'react'
import styles from "./MyComments.module.css";

const MyComments = (props) => {

    return <div>
            {props.comments.map(t => <div key={t.id} className={styles.comment}>
                <h3>Comment from user: {t.postId}</h3>
                <div><span className={styles.bold}>Comment_Id: </span> {t.id}</div>
                <div><span className={styles.bold}>Name: </span> {t.name}</div>
                <div><span className={styles.bold}>Email: </span> {t.email}</div>
                <div><span className={styles.bold}>Body: </span> {t.body}</div>
            </div>)}
        </div>
}

export default MyComments