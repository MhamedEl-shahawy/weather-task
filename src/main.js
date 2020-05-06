import Vue from 'vue'
import router from './router'
import App from './App.vue'
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false


new Vue({
  router,
  render: function (h) { return h(App) },
  
}).$mount('#app')