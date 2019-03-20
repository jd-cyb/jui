
import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider } from 'antd'
import { Provider } from 'mobx-react'
import store from '@/store'

// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
import App from './App'
import './index.less'

moment.locale('zh-cn')

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Provider { ...store }>
      <App />
    </Provider>
  </LocaleProvider>,
  document.getElementById('root')
)
