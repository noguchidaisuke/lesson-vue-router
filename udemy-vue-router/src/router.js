import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import Users from './views/Users';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home},
    { path: '/users', component: Users}
  ]
})
// export const router = new VueRouter({
//   base: '/',
//   mode: 'history',
//   routes: [
//     { path: '/path', component: component }
//   ]
// });