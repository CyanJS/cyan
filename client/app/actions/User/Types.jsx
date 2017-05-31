export const TYPE_REQUEST = 'FETCH_USER_REQUEST'
export const TYPE_REQUEST_FAILED = 'FETCH_USER_REQUEST_FAILED'
export const TYPE_REQUEST_SUCCEED = 'FETCH_USER_REQUEST_SUCCEED'

export const request = () => (
  {
    type: TYPE_REQUEST
  }
)

export const failed = error => (
  {
    type: TYPE_REQUEST_FAILED,
    error
  }
)

export const succeed = payload => (
  {
    type: TYPE_REQUEST_SUCCEED,
    payload
  }
)
