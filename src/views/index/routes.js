import Loadable from '@/components/loadable' //懒加载组件

const mainLayout = Loadable(() => import('@/layout/main')) //产品主界面布局
const loginLayout = Loadable(() => import('@/layout/login')) //登录/注册布局
const exceptionLayout = Loadable(() => import('@/layout/exception')) //异常页布局

export default [
  { path: '/user', name: 'loginLayout', component: loginLayout },
  { path: '/exception', name: 'exceptionLayout', component: exceptionLayout },
  { path: '/', name: 'mainLayout', component: mainLayout },
]
