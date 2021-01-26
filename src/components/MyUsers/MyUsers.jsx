import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";

const MyUsers = (props) => {
    return <div>
        {props.users.map(t => <div key={t.id} className={styles.post}>
            <h3>Name: {t.name}</h3>
            <div><span className={styles.bold}>User_name: </span> {t.username}</div>
            <div><span className={styles.bold}>Email: </span> {t.email}</div>
            <div><span className={styles.bold}>Address: </span> {`${t.address.street}, ${t.address.city}`}</div>
            <div><span className={styles.bold}>Phone: </span> {t.phone}</div>
            <div><span className={styles.bold}><a className={styles.a} href={t.website}>{t.website}</a></span></div>
            <div><span className={styles.bold}>Company: </span> {t.company.name}</div>
        </div>)}
    </div>
}

export default MyUsers