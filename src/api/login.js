import axios from 'axios'
import Cookies from 'js-cookie'

axios.defaults.headers.common.Authorization = `Bearer ${Cookies.get('token')}`

export const createUser = userDetails => {
    return axios.post('http://18.189.160.225:3000/api/iam/user', userDetails)
}

export const loginUser = loginDetails => {
    return axios.post('http://18.189.160.225:3000/api/iam/login', loginDetails)
}

export const logout = () => {
    return axios.post('http://18.189.160.225:3000/api/iam/logout')
}

export const refreshToken = () => {
    return axios.post('http://18.189.160.225:3000/api/iam/refresh_token')
}
