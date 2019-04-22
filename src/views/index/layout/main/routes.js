import Loadable from '@/components/loadable' //懒加载组件

const Dashboard = Loadable(() => import('./pages/dashboard')) //首页面板
const basicForm = Loadable(() => import('./pages/basic-form')) //基本表单
const stepForm = Loadable(() => import('./pages/step-form')) //分布表单
const basicTable = Loadable(() => import('./pages/basic-table')) //基本表格
const searchTable = Loadable(() => import('./pages/search-table')) //高级表格
const Charts = Loadable(() => import('./pages/charts')) //charts图表

export default [
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/form/basic-form', name: 'basicForm', component: basicForm },
  { path: '/form/step-form', name: 'stepForm', component: stepForm },
  { path: '/table/basic-table', name: 'basicTable', component: basicTable },
  { path: '/table/search-table', name: 'searchTable', component: searchTable },
  { path: '/charts', name: 'Charts', component: Charts }
]
