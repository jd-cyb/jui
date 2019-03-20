import React, { Fragment } from 'react'
import { Redirect, Route, Switch, Link } from 'react-router-dom'
import { Icon } from 'antd'
import GlobalFooter from './components/global-footer'
import styles from './index.less'
import logo from '@/assets/jui-logo.svg'

import routes from './routes'

/**
 * 注册布局页脚导航
 */
const links = [
  // {
  //   key: 'help',
  //   title: '帮助',
  //   href: '',
  // },
  // {
  //   key: 'privacy',
  //   title: '隐私',
  //   href: '',
  // },
  // {
  //   key: 'terms',
  //   title: '条款',
  //   href: '',
  // },
]

const copyright = (
  <Fragment>
    Copyright <Icon type="copyright" /> 2019 塞伯坦前端架构组
  </Fragment>
)

export default class LoginLayout extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.top}>
              <div className={styles.header}>
                <Link to="/">
                  <img alt="logo" className={styles.logo} src={logo} />
                  <span className={styles.title}>JUI</span>
                </Link>
              </div>
              <div className={styles.desc}>现代响应式的中后台最佳实践解决方案</div>
            </div>
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
              <Redirect from="/user" to="/user/login" />
            </Switch>
          </div>
          <GlobalFooter links={links} copyright={copyright} />
        </div>
      </Fragment>
    )
  }
}
