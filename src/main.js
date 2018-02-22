import Vue from 'vue'
import routes from './routes'
require('./sass/common.scss')

const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname,
    HeaderComponent: require('./layouts/Header.vue'),
    NavComponent: require('./layouts/Nav.vue'),
    isBf:false
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./pages/' + matchingView + '.vue')
        : require('./pages/404.vue')
    }
  },
  render (h) {
    return h('div',{class:'container'},[
      h(this.HeaderComponent),
      h('div',{class:'mx'},[
        h(this.NavComponent),
        h(this.ViewComponent)
      ])
    ])
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
})
