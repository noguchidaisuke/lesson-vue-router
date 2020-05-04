import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home';
import Users from './views/Users';
import UsersPosts from './views/UsersPosts';
import UsersProfile from './views/UsersProfile';
import HeaderHome from './views/HeaderHome';
import HeaderUsers from './views/HeaderUsers';


Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', components: {
        default: Home,
        header: HeaderHome
      }
    },
    { path: '/users/:id', components: {
        default: Users,
        header: HeaderUsers
      },
      props: {
        default: true,
        header: false
      },
      children: [
        { path: "posts", component: UsersPosts},
        { path: "profile", component: UsersProfile, name: "users-id-profile"}
      ]},
      {
        path: "/hello",
        redirect: "/"
      }
  ],
  scrollBehavior(to, from, savedPosition){
    if (savedPosition) {
      return savedPosition
    }
    if (to) {
      return {
        selector: "#next-user"
      }
    }
  }
})