import { request, failed, succeed } from './Types'
import { unauthenticated } from '../Auth/Types'
import config from '../../../.env.js'
import Cookie from '../../Cookie'

const URL_USER = config.domain.server + '/user'

export function loadUser (force = false) {
  return (dispatch, getState) => {
    const { user } = getState()
    if (typeof user.payload['_id'] !== 'undefined' && !force) return

    dispatch(request())
    window.fetch(URL_USER, {
      headers: { 'Authorization': Cookie.getToken() }
    })
    .then(data => data.json())
    .then(data => dispatch(succeed(data)))
    .catch(error => {
      Cookie.removeToken()
      dispatch(failed(error))
      dispatch(unauthenticated())
    })
  }
}

export function updateUser (payload) {
  return (dispatch) => {
    dispatch(request())
    window.fetch(URL_USER, {
      headers: { 
        'Authorization': Cookie.getToken(),
        'Content-Type' : 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(payload)
    })
    .then(data => data.json())
    .then(data => dispatch(succeed(data)))
    .catch(error => {
      Cookie.removeToken()
      dispatch(failed(error))
      dispatch(unauthenticated())
    })
  }
}
