import {
  TYPE_AUTHENTICATED,
  TYPE_UNAUTHENTICATED
} from '../actions/Auth/Types'

const initial = {
  authenticated: false
}

export default function Auth (state = initial, action) {
  if (action.type === TYPE_AUTHENTICATED) {
    return { ...initial, authenticated: true }
  }

  if (action.type === TYPE_UNAUTHENTICATED) {
    return { ...initial }
  }

  return state
}
