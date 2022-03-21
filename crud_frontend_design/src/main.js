import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

import App from './App.vue';
import MenuIndex from './components/MenuIndex.vue';
import MenuCreate from './components/MenuCreate.vue';
import MenuUpdate from './components/MenuUpdate.vue';
import UserIndex from './components/UserIndex.vue';
import SignUp from './components/SignUp.vue';
import SignIn from './components/SignIn.vue';
import UserDetail from './components/UserDetail.vue';
import BootstrapLogin1 from './components/BootstrapLogin1.vue';
import BootstrapLogin2 from './components/BootstrapLogin2.vue';
import BootstrapRegister from './components/BootstrapRegister.vue';
import RecycleBin from './components/RecycleBin.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'SignIn',
    path: '/',
    component: SignIn,
    meta: {
      hideNavbar: true,
    }
  },
  {
    name: 'MenuIndex',
    path: '/index',
    component: MenuIndex
  },
  {
    name: 'MenuCreate',
    path: '/create',
    component: MenuCreate
  },
  {
    name: 'MenuUpdate',
    path: '/update',
    component: MenuUpdate
  },
  {
    name: 'UserIndex',
    path: '/users',
    component: UserIndex
  },
  {
    name: 'SignUp',
    path: '/signup',
    component: SignUp,
    meta: {
      hideNavbar: true,
    }
  },
  {
    name: 'UserDetail',
    path: '/details',
    component: UserDetail
  },
  {
    name: 'RecycleBin',
    path: '/recycle_bin',
    component: RecycleBin
  },
  {
    name: 'BootstrapLogin1',
    path: '/bs_login_1',
    component: BootstrapLogin1,
    meta: {
      hideNavbar: true,
    }
  },
  {
    name: 'BootstrapLogin2',
    path: '/bs_login_2',
    component: BootstrapLogin2,
    meta: {
      hideNavbar: true,
    }
  },
  {
    name: 'BootstrapRegister',
    path: '/bs_register_1',
    component: BootstrapRegister,
    meta: {
      hideNavbar: true,
    }
  }
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
});

router.beforeEach((to, from, next) => {
  console.log("to - ", to.name, "from - ", from.name);
  if (!localStorage.getItem('token')) {
    if (to.name == 'SignIn' || to.name == 'SignUp') {
      next()
    }
    else {
      next({ name: 'SignIn'})
    }
  }
  else {
    if (to.name == 'SignIn' || to.name == 'SignUp') {
      next ({name: 'UserIndex'})
    }
    else {
      next()
    }
  }
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')