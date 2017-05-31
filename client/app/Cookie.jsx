import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const getToken = () => {
  return cookies.get('token') || false
}

const hasToken = () => {
  return cookies.get('token') !== undefined
}

const setToken = token => {
  cookies.set('token', token, {path: '/'})
}

const removeToken = () => {
  cookies.remove('token', {path: '/'})
}

module.exports = { getToken, setToken, hasToken, removeToken }
