import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.headers.common.Authorization = `Bearer ${Cookies.get('token')}`

export const createUser = userDetails => {
    return axios.post('/api/iam/user', userDetails)
}

export const loginUser = loginDetails => {
    return axios.post('/api/iam/login', loginDetails)
}

export const logout = () => {
    return axios.post('/api/iam/logout')
}

export const refreshToken = () => {
    return axios.post('/api/iam/refresh_token')
}
