import Loadable from '@/components/loadable'

const Step1 = Loadable(() => import('./pages/step1'))
const Step2 = Loadable(() => import('./pages/step2'))
const Step3 = Loadable(() => import('./pages/step3'))

export default [
  { path: '/form/step-form/step1', component: Step1 },
  { path: '/form/step-form/step2', component: Step2 },
  { path: '/form/step-form/step3', component: Step3 }
]
