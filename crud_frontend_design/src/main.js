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

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
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
];

const router = new VueRouter({ mode: 'history', routes: routes });

router.beforeResolve((to, from, next) => {
  if (to.name) {
      NProgress.start()
  }
  next()
});

router.afterEach(() => {
  NProgress.done()
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')