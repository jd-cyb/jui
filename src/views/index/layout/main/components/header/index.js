import React, { Component } from 'react'
import { Layout } from 'antd'
import Animate from 'rc-animate'
import GlobalHeader from './global-header'
import TopNavHeader from './top-nav-header'
import styles from './index.less'

const { Header } = Layout

export default class HeaderView extends Component {
  state = {
    visible: true,
  }

  static getDerivedStateFromProps(props, state) {
    if (!props.autoHideHeader && !state.visible) {
      return {
        visible: true,
      }
    }
    return null
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handScroll, { passive: true })
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handScroll)
  }

  getHeadWidth = () => {
    const { isMobile, collapsed, fixedHeader, layout } = this.props
    if (isMobile || !fixedHeader || layout === 'topmenu') {
      return '100%'
    }
    return collapsed ? 'calc(100% - 80px)' : 'calc(100% - 256px)'
  }

  handleNoticeClear = type => {
    console.log(type)
  }

  handleMenuClick = ({ key }) => {
    console.log(key)
  }

  handleNoticeVisibleChange = visible => {
    if (visible) {
      const { dispatch } = this.props
      dispatch({
        type: 'global/fetchNotices',
      })
    }
  }

  handScroll = () => {
    const { autoHideHeader } = this.props
    const { visible } = this.state
    if (!autoHideHeader) {
      return
    }
    const scrollTop = document.body.scrollTop + document.documentElement.scrollTop
    if (!this.ticking) {
      this.ticking = true
      requestAnimationFrame(() => {
        if (this.oldScrollTop > scrollTop) {
          this.setState({
            visible: true,
          })
        } else if (scrollTop > 300 && visible) {
          this.setState({
            visible: false,
          })
        } else if (scrollTop < 300 && !visible) {
          this.setState({
            visible: true,
          })
        }
        this.oldScrollTop = scrollTop
        this.ticking = false
      })
    }
  }

  render() {
    const { isMobile, handleMenuCollapse,handleMenuClick, navTheme, layout, fixedHeader } = this.props
    const { visible } = this.state
    const isTop = layout === 'topmenu'
    const width = this.getHeadWidth()
    const HeaderDom = visible ? (
      <Header style={{ padding: 0, width }} className={fixedHeader ? styles.fixedHeader : ''}>
        {isTop && !isMobile ? (
          <TopNavHeader
            theme={navTheme}
            mode="horizontal"
            onCollapse={handleMenuCollapse}
            onMenuClick={handleMenuClick}
            {...this.props}
          />
        ) : (
          <GlobalHeader
            onCollapse={handleMenuCollapse}
            onMenuClick={handleMenuClick}
            {...this.props}
          />
        )}
      </Header>
    ) : null
    return (
      <Animate component="" transitionName="fade">
        {HeaderDom}
      </Animate>
    )
  }
}

