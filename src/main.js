import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import './assets/scss/style.scss';

Vue.config.productionTip = false;

Vue.use(VueRouter);
import Home from './components/Home';
import ShowMeme from './components/ShowMeme';

const routes = [
  { path: '/' , component: Home },
  { path: '/meme/:id' , component: ShowMeme }
];

const router = new VueRouter({
  routes
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
