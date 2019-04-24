import Loadable from '@/components/loadable'

const verticalBar = Loadable(() => import('./pages/vertical-bar'))
const horizontalBar = Loadable(() => import('./pages/horizontal-bar'))
const barStack = Loadable(() => import('./pages/bar-stack'))
const pieSimple = Loadable(() => import('./pages/pie-simple'))
const lineSimple = Loadable(() => import('./pages/line-simple'))
const pieDoughnut = Loadable(() => import('./pages/pie-doughnut'))
const Radar = Loadable(() => import('./pages/radar'))
const Funnel = Loadable(() => import('./pages/funnel'))

export default [
  { path: '/charts/echarts/vertical-bar', component: verticalBar },
  { path: '/charts/echarts/horizontal-bar', component: horizontalBar },
  { path: '/charts/echarts/bar-stack', component: barStack },
  { path: '/charts/echarts/pie-simple', component: pieSimple },
  { path: '/charts/echarts/line-simple', component: lineSimple },
  { path: '/charts/echarts/pie-doughnut', component: pieDoughnut },
  { path: '/charts/echarts/radar', component: Radar },
  { path: '/charts/echarts/funnel', component: Funnel }
]
