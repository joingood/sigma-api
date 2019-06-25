import Vue from 'vue';
import App from './App.vue';
import VueRouter from "vue-router";
import VueResource from 'vue-resource';

//App
import Router from "./Router";

//Componentes


//Usando las rutas en vue
Vue.use(VueRouter);
Vue.use(VueResource);


const enrutador = new VueRouter({
  routes: Router
});


new Vue({
  el: '#app',
  router: enrutador,
  render: h => h(App)
});
