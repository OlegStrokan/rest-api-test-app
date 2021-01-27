import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";

const MyTodos = (props) => {
    const newTodoId = React.createRef()
    const newTodoTitle = React.createRef()
    const newTodoCompleted = React.createRef()


    const onAddTodo = () => {
        let id = newTodoId.current.value
        let title = newTodoTitle.current.value
        let completed = newTodoCompleted.current.value
        props.addTodo({id, title, completed})
        props.sendTodo({id, title, completed})
        newTodoId.current.value = ''
        newTodoTitle.current.value = ''
        newTodoCompleted.current.value = ''
    }

    return <div>
        <div className={styles.addItem}>
            <div>Id:<input
                ref={newTodoId}
                value={props.newText}
            /></div>
            <div>Title:<input
                ref={newTodoTitle}
                value={props.newText}
            /></div>
            <div>Completed (0 or 1):<input
                ref={newTodoCompleted}
                value={props.newText}
            /></div>
            <button className={styles.button} onClick={onAddTodo}>Add Todo</button>
        </div>

        <h1>My Todos</h1>
        {props.todos.map(t => <div key={t.id} className={styles.post}>
            <h3> {t.userId == 1 ? 'Todo from user: 1' : 'My Todo'}</h3>
            <div><span className={styles.bold}>Todos_id:</span> {t.id}</div>
            <div><span className={styles.bold}>Title:</span> {t.title}</div>
            <div><span className={styles.bold}>Completed:</span> {t.completed == true ? 'true' : 'false'}</div>
        </div>)}
    </div>
}

export default MyTodos