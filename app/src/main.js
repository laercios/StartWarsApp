import Vue from 'vue'
import App from './App.vue'
import router from './router'
import StarshipPlugin from './plugins/starship'
import PeoplePlugin from './plugins/people'

Vue.config.productionTip = false
Vue.use(StarshipPlugin)
Vue.use(PeoplePlugin)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
