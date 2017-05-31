import {
  TYPE_REQUEST,
  TYPE_REQUEST_FAILED,
  TYPE_REQUEST_SUCCEED
} from '../actions/User/Types'

const initial = {
  error: null,
  fetching: false,
  payload: []
}

export default function User (state = initial, action) {
  if (action.type === TYPE_REQUEST) {
    return { ...initial, fetching: true }
  }

  if (action.type === TYPE_REQUEST_FAILED) {
    return { ...initial, error: action.error }
  }

  if (action.type === TYPE_REQUEST_SUCCEED) {
    return { ...initial, payload: action.payload }
  }

  return state
}
