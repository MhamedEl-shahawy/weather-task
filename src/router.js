import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve =>{
  require.ensure(['./views/Home.vue'],()=>{
      resolve(require('./views/Home.vue'));
  });
};
const Weather = resolve =>{
    require.ensure(['./views/Weather.vue'],()=>{
        resolve(require('./views/Weather.vue'));
    });
  };

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/weather',
        name: 'weather',
        component: Weather
    }
  ]
})
