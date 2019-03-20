import React, { PureComponent } from 'react'
import { Spin, Dropdown, Menu, Icon, Avatar } from 'antd'
import styles from './index.less'

export default class GlobalHeaderRight extends PureComponent {
  render() {
    const {
      currentUser,
      onMenuClick,
      theme,
    } = this.props

    const menu = (
      <Menu className={styles.menu} selectedKeys={[]} onClick={onMenuClick}>
        <Menu.Item key="logout">
          <Icon type="logout" />退出登录
        </Menu.Item>
      </Menu>
    )

    let className = styles.right

    if (theme === 'dark') {
      className = `${styles.right}  ${styles.dark}`
    }

    return (
      <div className={className}>
        {currentUser.name ? (
          <Dropdown overlay={menu}>
            <span className={`${styles.action} ${styles.account}`}>
              <Avatar size="small" className={styles.avatar} src={currentUser.avatar} />
              <span className={styles.name}>{currentUser.name}</span>
            </span>
          </Dropdown>
        ) : (
            <Spin size="small" style={{ marginLeft: 8 }} />
          )}
      </div>
    )
  }
}
