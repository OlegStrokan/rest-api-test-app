import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";

const Login = (props) => {

    let newLoginText = React.createRef()
    let newPasswordText = React.createRef()

    let onCheckData = () => {
        debugger
        let login = newLoginText.current.value
        let password = newPasswordText.current.value
        props.checkData({login, password})

    }

       return <div className={styles.login}>
           <h2>LOG IN</h2>
           <div className={styles.subInput}>Login <input className={styles.input} ref={newLoginText}/></div>
           <div className={styles.subInput}>Password<input className={styles.input} ref={newPasswordText}/></div>
           <button className={styles.button} onClick={onCheckData}>Log in</button>
     </div>
}

export default Login