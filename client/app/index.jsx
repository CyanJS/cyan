import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Routes from './Routes'
import Store from './Store'
import Cookie from './Cookie'

import { authenticated } from './actions/Auth/Types'
import { loadUser } from './actions/User'

if (Cookie.hasToken()) {
  Store.dispatch(authenticated())
  Store.dispatch(loadUser())
}

ReactDOM.render(
  <Provider store={Store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
