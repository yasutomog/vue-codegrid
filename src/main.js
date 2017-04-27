// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
const vm = new Vue({
  template: `<div>
    <input v-model="message"><button @click="increment">increment</button>
    <div :style="styleObject">{{messageAndCount}}</div>
    <div v-if="count % 2 !== 0">{{messageAndCount}}</div>
    <div v-else>この要素はcountが偶数のときに表示されます</div>
    <div>colors:
      <span v-for="color in colors" :style="{color}">{{color}} </span>
    </div>
    <div>users:
      <div v-for="user in users">
        <span v-for="(value, key) in user">
          {{key}}:{{value}},
        </span>
      </div>
    </div>
  </div>`,
  data () {
    return {
      message: 'Hello Vue.js !!',
      count: 0,
      colors: ['red', 'blue', 'green'],
      users: [
        {id: 1, name: 'ユーザ１'},
        {id: 2, name: 'ユーザ２'}
      ]
    }
  },
  methods: {
    increment () {
      this.count += 1
    }
  },
  computed: {
    messageAndCount () {
      let msg,
        cnt

      msg = this.message
      cnt = this.count

      return msg + '::' + cnt
    },
    styleObject () {
      return {
        color: this.count % 2 !== 0 ? 'red' : 'blue',
        fontSize: '16px'
      }
    }
  }
})

vm.$mount('#app')
