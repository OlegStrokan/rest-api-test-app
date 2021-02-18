import React from 'react'
import styles from "../MyPosts/MyPosts.module.css";
import {Field, reduxForm} from "redux-form";
import {
    Input,
    maxLengthEmail,
    maxLengthLink, maxLengthName, maxLengthPhone,
    minLengthEmail,
    minLengthLink, minLengthName, minLengthPhone
} from "../../utils/validators/length-validators";
import {required} from "../../utils/validators/validators";

let AddUserForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div className={styles.subInput}>Name:
            <Field className={styles.input} name="Name"
                   component={Input} validate={[required, maxLengthName, minLengthName]}/></div>
        <div className={styles.subInput}>User_name:
            <Field className={styles.input} name="User_name"
                   component={Input} validate={[required, maxLengthName, minLengthName]}/></div>
        <div className={styles.subInput}>Email:
            <Field className={styles.input} name="Email"
                   component={Input} validate={[required, maxLengthEmail, minLengthEmail]}/></div>
        <div className={styles.subInput}>Phone:
            <Field className={styles.input} name="Phone"
                   component={Input} validate={[required, maxLengthPhone, minLengthPhone]}/></div>
        <div className={styles.subInput}>Website:
            <Field className={styles.input} name="Website"
                   component={Input} validate={[required, maxLengthLink, minLengthLink]}/></div>
        <button className={styles.button}>Add User</button>
        </form>
}

AddUserForm = reduxForm({form: 'AddUser'})(AddUserForm)

const MyUsers = (props) => {

    const onSubmit = (values) => {
        props.addUser({name: values.Name, username: values.User_name, email: values.Email,
                       phone: values.Phone, website: values.Website})
        props.sendUser({name: values.Name, username: values.User_name, email: values.Email,
                        phone: values.Phone, website: values.Website})
    }

    return <div>

        <div className={styles.addItem}>
        <AddUserForm onSubmit={onSubmit}/>
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


/*
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

export default MyUsers*/
