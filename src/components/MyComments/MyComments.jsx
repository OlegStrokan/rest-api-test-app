import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";

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
                <div>Add comment's Id:<input
                    ref={newCommentId}
                    value={props.newText}
                /></div>
                <div>Add comment's Name:<input
                    ref={newCommentName}
                    value={props.newText}
                /></div>
                <div>Add comment's Email:<input
                    ref={newCommentEmail}
                    value={props.newText}
                /></div>
                <div>Add comment's Body:<input
                    ref={newCommentBody}
                    value={props.newText}
                /></div>
                <button className={styles.button} onClick={onAddComment}>Add Comment</button>
            </div>

            <h1>Comments</h1>
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