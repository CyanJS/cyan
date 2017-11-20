import React from 'react'
import createBrowserHistory from 'history/createBrowserHistory'
import { Router, Route, Switch } from 'react-router-dom'

import AuthenticatedRoute from './components/Auth/AuthenticatedRoute'
import UnauthenticatedRoute from './components/Auth/UnauthenticatedRoute'

import Layout from './components/Layout'
import NotFound from './views/NotFound'

import Home from './views/Home'
import Login from './views/Login'
import LoginCallback from './views/LoginCallback'
import Dashboard from './views/Dashboard'

const Routes = () => (
  <Router history={createBrowserHistory()}>
    <Route path='/'
      render={props => (
        <Layout {...props}>
          <Switch>
            <Route exact path='/' component={Home} />
            <UnauthenticatedRoute exact path='/login' component={Login} />
            <UnauthenticatedRoute exact path='/login/callback' component={LoginCallback} />
            <AuthenticatedRoute exact path='/dashboard' component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      )}
    />
  </Router>
)

export default Routes
