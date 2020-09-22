import axios from 'axios'
const baseConfig = {
    timeout: 10e3,
    baseURL: '/'
}
const service = axios.create(baseConfig)
service.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(new Error(error))
    }
)
export default service
