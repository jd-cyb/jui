import React from 'react'
import { login } from '@/api'
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd'

import styles from './index.less'
import auth from '@/utils/auth'

@Form.create()
export default class App extends React.Component {
  state = {
    // autoLogin: true,
    loginErrno: 0,
    loginMsg: ''
  }

  componentDidMount() {
    document.title = '登录'
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (err) return
      const res = await login(values)
      if (res.errno !== 0) {
        this.setState({ loginErrno: res.errno, loginMsg: res.msg })
        return
      }

      auth.login(res.data)

      const { history } = this.props
      history.push('/')
    })
  }
  handleRegister = () => {
    const { history } = this.props
    history.push('/user/register')
  }

  // changeAutoLogin = e => {
  //   this.setState({
  //     autoLogin: e.target.checked,
  //   })
  // }

  renderMessage = content => {
    return <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { loginErrno, loginMsg, autoLogin } = this.state
    return (
      <div className={styles.loginPage} style={{ backgroundColor: this.props.bgc }}>
        <Form onSubmit={this.handleSubmit} className={styles.loginForm}>
          {loginErrno !== 0 && this.renderMessage(loginMsg)}
          <Form.Item>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: '请输入用户名！' }],
            })(
              <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名：admin" />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码！' }],
            })(
              <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码：888888" />
            )}
          </Form.Item>
          <Form.Item className={styles.last}>
            {/* <Checkbox checked={autoLogin} onChange={this.changeAutoLogin}>
              自动登录
             </Checkbox> */}
            {/* <a className={styles.loginFormForgot} href="">忘记密码</a> */}
            <Button size="large" type="primary" htmlType="submit" className={styles.loginFormButton}>
              登录
            </Button>

            <a className={styles.loginFormReg} onClick={this.handleRegister}>注册账户</a>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
