import App from '../App'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login.vue')), 'login')

export default [{
    path: '/',
    component: App,
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        component: home
      },
      {
        path: '/login',
        component: login
      }
    ]
  }]
