import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/users/v1'

const userAxiosInstance = axios.create({
    baseURL: baseURL,
})

userAxiosInstance.interceptors.request.use(
    (request) => request,
    (error) => {
        return Promise.reject(error)
    }
)

userAxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error)
    }
)

export default userAxiosInstance;