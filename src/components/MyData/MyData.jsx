import React from "react";
import styles from './MyData.module.css'
import {NavLink} from "react-router-dom";

const MyData = (props) => {
    return <div>
        <NavLink to={'/posts'} className={styles.button}>My Posts</NavLink>
        <NavLink to={'/comments'} className={styles.button}>My Comments</NavLink>
        <NavLink to={'/albums'} className={styles.button}>My Albums</NavLink>
        <NavLink to={'/photos'} className={styles.button}>My Photos</NavLink>
        <NavLink to={'/todos'} className={styles.button}>My Todos</NavLink>
        <NavLink to={'/users'} className={styles.button}>My Users</NavLink>
        <NavLink to={'/'} className={styles.button}>Back</NavLink>
    </div>
}

export default MyData