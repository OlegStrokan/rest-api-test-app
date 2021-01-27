import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})

export const dataAPI = {
    getPosts(){
        return instance.get(`users/1/posts`)
            .then(response => {
                return response.data
            })
    },
    getComments(){
        return instance.get(`posts/1/comments`)
            .then(response => {
                return response.data
            })
    },
    getAlbums(){
        return instance.get(`users/1/albums`)
            .then(response => {
                return response.data
            })
    },
    getPhotos(){
        return instance.get(`albums/1/photos`)
            .then(response => {
                return response.data
            })
    },
    getTodos(){
        return instance.get(`users/1/todos`)
            .then(response => {
                return response.data
            })
    },
    getUsers(){
        return instance.get(`users`)
            .then(response => {
                return response.data
            })
    }
}
export const myDataAPI={
    sendPost(post){
        return instance.post(`users/1/posts`,{post})
    },
    sendComment(comment){
        return instance.post(`posts/1/comments`,{comment})
    },
    sendAlbum(album){
        return instance.post(`users/1/albums`,{album})
    },
    sendPhoto(photo){
        return instance.post(`users/1/photos`,{photo})
    },
    sendTodo(todo){
        return instance.post(`users/1/todos`,{todo})
    },
    sendUser(user){
        return instance.post(`users`,{user})
    },

}