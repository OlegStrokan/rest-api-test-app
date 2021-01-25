import React from 'react'
import styles from "./MyComments.module.css";

const MyComments = (props) => {
    let pagesCount = Math.ceil((props.totalCommentsCount - 420) / props.pageSize)

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
            {props.comments.map(t => <div key={t.id} className={styles.comment}>
                <h3>Comment from user: {t.postId}</h3>
                <div><span className={styles.bold}>Comment_Id: </span> {t.id}</div>
                <div><span className={styles.bold}>Name: </span> {t.name}</div>
                <div><span className={styles.bold}>Email: </span> {t.email}</div>
                <div><span className={styles.bold}>Body: </span> {t.body}</div>
            </div>)}
        </div>
    </div>
}

export default MyComments