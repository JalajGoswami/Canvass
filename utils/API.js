import axios from 'axios'
export const BASE_URL = 'https://canvass-social-app.cyclic.app'

export default function API(url) {
    const accessToken = process.env.ACCESS_TOKEN

    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            Authorization: accessToken ? `Bearer ${accessToken}` : ''
        }
    })

    // Response interceptor to override default error.message
    instance.interceptors.response.use(
        (response) => response,
        function (error) {

            error.message = error.response?.data?.error
                || error.response?.data?.message
                || error.message

            return Promise.reject(error)
        })

    return {
        get: (config) => instance.get(url, config),
        post: (data, config) => instance.post(url, data, config),
        patch: (data, config) => instance.patch(url, data, config),
        delete: (config) => instance.delete(url, config),
    }
}