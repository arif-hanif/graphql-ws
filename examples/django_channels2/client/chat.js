import Vue from 'vue'
import apolloProvider from './apollo'
import App from './App.vue'

new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  render: h => h(App),
})