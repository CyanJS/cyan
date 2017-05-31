import { unauthenticated } from './Types'
import Cookie from '../../Cookie'

export function logout () {
  return dispatch => {
    Cookie.removeToken()
    dispatch(unauthenticated())
  }
}
