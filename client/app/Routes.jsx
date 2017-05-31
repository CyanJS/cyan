import React from 'react'
import { browserHistory, IndexRoute, Router, Route } from 'react-router'

import Authentication from './components/Auth/Authentication'
import Token from './components/Auth/Token'

import Layout from './views/Layout'
import NotFound from './views/NotFound'

import Home from './views/Home'
import Login from './views/Login'
import Dashboard from './views/Dashboard'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='login' component={Login} />
      <Route path='login/auth' component={Token} />
      <Route path='dashboard' component={Authentication(Dashboard)} />
      <Route path='*' component={NotFound} />
    </Route>
  </Router>
)

export default Routes
