export const TYPE_AUTHENTICATED = 'AUTH_USER'
export const TYPE_UNAUTHENTICATED = 'UNAUTH_USER'

export const authenticated = () => (
  {
    type: TYPE_AUTHENTICATED
  }
)

export const unauthenticated = () => (
  {
    type: TYPE_UNAUTHENTICATED
  }
)
