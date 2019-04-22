import Loadable from '@/components/loadable'

const verticalBar = Loadable(() => import('./pages/vertical-bar'))
const horizontalBar = Loadable(() => import('./pages/horizontal-bar'))
const barStack = Loadable(() => import('./pages/bar-stack'))
const pieSimple = Loadable(() => import('./pages/pie-simple'))
const lineSimple = Loadable(() => import('./pages/line-simple'))
const pieDoughnut = Loadable(() => import('./pages/pie-doughnut'))
const pieRanged = Loadable(() => import('./pages/pie-ranged'))
const Radar = Loadable(() => import('./pages/radar'))
const Funnel = Loadable(() => import('./pages/funnel'))

export default [
  { path: '/charts/vertical-bar', component: verticalBar },
  { path: '/charts/horizontal-bar', component: horizontalBar },
  { path: '/charts/bar-stack', component: barStack },
  { path: '/charts/pie-simple', component: pieSimple },
  { path: '/charts/line-simple', component: lineSimple },
  { path: '/charts/pie-doughnut', component: pieDoughnut },
  { path: '/charts/pie-ranged', component: pieRanged },
  { path: '/charts/radar', component: Radar },
  { path: '/charts/funnel', component: Funnel }
]
