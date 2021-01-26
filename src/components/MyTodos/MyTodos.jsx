import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";

const MyTodos = (props) => {
    return <div>
        {props.todos.map(t => <div key={t.id} className={styles.post}>
            <h3>Todo from user: {t.userId}</h3>
            <div><span className={styles.bold}>Todos_id:</span> {t.id}</div>
            <div><span className={styles.bold}>Title:</span> {t.title}</div>
            <div><span className={styles.bold}>Completed:</span> {t.completed ? 'true' : 'false'}</div>
        </div>)}
    </div>
}

export default MyTodos