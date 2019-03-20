import React, { Fragment } from 'react'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
import DocumentTitle from 'react-document-title'

import routes from './routes'

export default class exceptionLayout extends React.Component {

  getPageTitle() {
    let title = 'CYB Ant Design'
    return title
  }

  render() {
    return (
      <DocumentTitle title={this.getPageTitle()}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={props => (
                  <route.component {...props} />
                )} />
            ) : (null)
          })}
        </Switch>
      </DocumentTitle>
    )
  }
}
