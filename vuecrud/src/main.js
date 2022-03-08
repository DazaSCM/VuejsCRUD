import Vue from 'vue'
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';

import App from './App.vue';
import AppCreate from './components/AppCreate.vue';
import AppEdit from './components/AppEdit.vue';
import AppIndex from './components/AppIndex.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

const routes = [
  {
    name: 'AppCreate',
    path: '/create',
    component: AppCreate
  },
  {
    name: 'AppEdit',
    path: '/edit',
    component: AppEdit
  },
  {
    name: 'AppIndex',
    path: '/index',
    component: AppIndex
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