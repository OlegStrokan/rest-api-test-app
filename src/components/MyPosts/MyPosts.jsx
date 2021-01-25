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

export default MyPosts