import Loadable from '@/components/loadable'

const liquidFillGauge = Loadable(() => import('./pages/liquid-fill-gauge'))
const pieRanged = Loadable(() => import('./pages/pie-ranged'))


export default [
  { path: '/charts/viser/liquid-fill-gauge', component: liquidFillGauge },
  { path: '/charts/viser/pie-ranged', component: pieRanged }
]
