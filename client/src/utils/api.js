import axios from "axios";

const api = {
    login: (data) => axios.post('/api/user/login', data),
    logout: () => axios.post('/api/user/logout'),
    searchByTitle: (query) => axios.post('/api/posts/findsecrets', query),
    signup: (data) => axios.post('api/user', data),
    createPost: (data) => axios.post('api/posts', data),
    deletePost: (id) => axios.delete('/api/posts/' + id),
    getPosts: () => axios.get('/api/posts'),
    getPost: (id) => axios.get('/api/posts/' + id),
    uploadImageFile: (data) => axios.post("/api/posts/image/upload", data),
    getYourPosts: (id) => axios.get('/api/user/' + id),
    createComment: (data) => axios.post('/api/posts/:id', data)
}


export default api;