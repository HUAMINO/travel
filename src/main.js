// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
import 'styles/border.css'
import fastClick from 'fastclick'
import 'styles/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
// 解决移动端300毫秒延长的问题。

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
