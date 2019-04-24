import { hot } from 'react-hot-loader/root'
import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from '@/components/private'
import routes from './routes' //布局路由

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          {routes.map((route, idx) => {
            if (route.component && route.name === 'mainLayout') {
              return (
                <PrivateRoute
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  component={route.component} />
              )
            }
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <route.component {...props} />
                )} />
            ) : (null);
          })}
        </Switch>
      </HashRouter>
    )
  }
}

export default hot(App)
