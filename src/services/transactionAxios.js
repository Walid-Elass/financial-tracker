import axios from 'axios';

const baseURL = 'http://127.0.0.1:8000/transactions/v1'

const token = sessionStorage.getItem("accessToken");

const transactionsAxiosInstance = axios.create({
    baseURL: baseURL,
    headers: {'Authorization': token ? `Bearer ${token}` : ''}
})

transactionsAxiosInstance.interceptors.request.use(
    (request) => request,
    (error) => {
        return Promise.reject(error)
    }
)

transactionsAxiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        return Promise.reject(error)
    }
)

export default transactionsAxiosInstance;