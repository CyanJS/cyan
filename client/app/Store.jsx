import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import loggerMiddleware from 'redux-logger'

import User from './reducers/User'
import Auth from './reducers/Auth'

export default createStore(
  combineReducers(
    {
      user: User,
      auth: Auth
    }
  ),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)
