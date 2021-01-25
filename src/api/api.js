import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const dataAPI = {
    getPosts(currentPage = 1, pageSize = 10){
        return instance.get(`posts?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getComments(currentPage = 1, pageSize = 10){
        return instance.get(`comments?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getAlbums(currentPage = 1, pageSize = 10){
        return instance.get(`albums?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getPhotos(currentPage = 1, pageSize = 10){
        return instance.get(`photos?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getTodos(currentPage = 1, pageSize = 10){
        return instance.get(`todos?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    }
}