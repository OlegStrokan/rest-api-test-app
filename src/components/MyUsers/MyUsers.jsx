import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";

const MyUsers = (props) => {

    const newUserName = React.createRef()
    const newUserUsername = React.createRef()
    const newUserEmail = React.createRef()
    const newUserPhone = React.createRef()
    const newUserWebsite = React.createRef()

    const onAddUser = () => {
        let name = newUserName.current.value
        let username = newUserUsername.current.value
        let email = newUserEmail.current.value
        let phone = newUserPhone.current.value
        let website = newUserWebsite.current.value
        props.addUser({name, username, email, phone, website})
        props.sendUser({name, username, email , phone, website})
        newUserName.current.value = ''
        newUserUsername.current.value = ''
        newUserEmail.current.value = ''
        newUserPhone.current.value = ''
        newUserWebsite.current.value = ''
    }

    return <div>
        <div className={styles.addItem}>
            <div className={styles.subInput}>Name: <input className={styles.input}
                ref={newUserName}
                value={props.newText}
            /></div>
            <div className={styles.subInput}>User_name: <input className={styles.input}
                ref={newUserUsername}
                value={props.newText}
            /></div>
            <div className={styles.subInput}>Email: <input className={styles.input}
                ref={newUserEmail}
                value={props.newText}
            /></div>
            <div className={styles.subInput}>Phone: <input className={styles.input}
                ref={newUserPhone}
                value={props.newText}
            /></div>
            <div className={styles.subInput}>Website: <input className={styles.input}
                ref={newUserWebsite}
                value={props.newText}
            /></div>
            <button className={styles.button} onClick={onAddUser}>Add User</button>
        </div>

        <h1>Users</h1>
        {props.users.map(t => <div key={t.id} className={styles.post}>
            <h3>Name: {t.name}</h3>
            <div><span className={styles.bold}>User_name: </span> {t.username}</div>
            <div><span className={styles.bold}>Email: </span> {t.email}</div>
            <div><span className={styles.bold}>Phone: </span> {t.phone}</div>
            <div><span className={styles.bold}><a className={styles.a} href={t.website}>{t.website}</a></span></div>
        </div>)}
    </div>
}

export default MyUsers