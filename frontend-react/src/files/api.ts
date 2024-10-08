
import axios from "axios";
import { ACCESS_TOKEN } from "./constants"

console.log( import.meta.env.VITE_API_URL)

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.request.use(
    async config => {
        const token = window.localStorage.getItem(ACCESS_TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

export default api;