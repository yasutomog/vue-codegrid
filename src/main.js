// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'

import Vuex from 'vuex'
import _store from './store'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = new VueRouter(routes)
const store = new Vuex.Store(_store)

let v = new Vue(
  {
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
    store
  }
)

console.log(v)
console.log(this.$store.state)
