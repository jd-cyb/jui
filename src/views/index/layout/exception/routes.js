import Loadable from '@/components/loadable'

const page403 = Loadable(() => import('./pages/403'))
const page404 = Loadable(() => import('./pages/404'))
const page500 = Loadable(() => import('./pages/500'))

export default [
  { path: '/exception/403', component: page403 },
  { path: '/exception/404', component: page404 },
  { path: '/exception/500', component: page500 },
]
