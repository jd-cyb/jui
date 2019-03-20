/**
 * 权限登录控制组件
 */

import React from 'react'
import { Route, Redirect, } from 'react-router-dom'

import auth from '@/utils/auth'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    auth.loggedIn()
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/user/login',
        state: { from: props.location }
      }} />
  )} />
)

export default PrivateRoute
