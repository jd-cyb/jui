import Loadable from '@/components/loadable'

const Login = Loadable(() => import('./pages/login'))
const Register = Loadable(() => import('./pages/register'))
const RegisterResult = Loadable(() => import('./pages/register-result'))

export default [
  { path: '/user/login', component: Login },
  { path: '/user/register', component: Register },
  { path: '/user/register-result', component: RegisterResult },
]
