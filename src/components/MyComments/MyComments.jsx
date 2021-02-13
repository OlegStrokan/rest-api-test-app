import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";
import Preloader from "../common/Preloader/Preloader";

const MyComments = (props) => {
    const newCommentId = React.createRef()
    const newCommentName = React.createRef()
    const newCommentEmail = React.createRef()
    const newCommentBody = React.createRef()
    
    const onAddComment = () => {
        let id = newCommentId.current.value
        let name = newCommentName.current.value
        let email = newCommentEmail.current.value
        let body = newCommentBody.current.value
        props.addComment({id, name, email, body})
        props.sendComment({id, name, email, body})
        newCommentId.current.value = ''
        newCommentName.current.value = ''
        newCommentEmail.current.value = ''
        newCommentBody.current.value = ''
    }

    return <div>
            <div className={styles.addItem}>
                <div className={styles.subInput}>Id:<input className={styles.input}
                    ref={newCommentId}
                    value={props.newText}
                /></div>
                <div className={styles.subInput}>Name:<input className={styles.input}
                    ref={newCommentName}
                    value={props.newText}
                /></div>
                <div className={styles.subInput}>Email:<input className={styles.input}
                    ref={newCommentEmail}
                    value={props.newText}
                /></div>
                <div className={styles.subInput}>Body:<input className={styles.input}
                    ref={newCommentBody}
                    value={props.newText}
                /></div>
                <button className={styles.button} onClick={onAddComment}>Add Comment</button>
            </div>

            <h1>Comments</h1>
        {props.isFetching ? <Preloader/> : null}
            {props.comments.map(t => <div key={t.id} className={styles.comment}>
                <h3> {t.postId == 1 ? 'Comment from user: 1' : 'My Comment'}</h3>
                <div><span className={styles.bold}>Comment_Id: </span> {t.id}</div>
                <div><span className={styles.bold}>Name: </span> {t.name}</div>
                <div><span className={styles.bold}>Email: </span> {t.email}</div>
                <div><span className={styles.bold}>Body: </span> {t.body}</div>
            </div>)}
        </div>
}

export default MyComments