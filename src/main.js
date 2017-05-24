// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

    Vue.directive('focus', {
                // 当绑定元素插入到DOM中
                inserted: function (el) {
                // 聚焦元素
                el.focus()
                }
            });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// var Profile = Vue.extend({
//   template: '<App/>',
//   components: { App },
//   name:'te',
//   router,
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })
// // 创建 Profile 实例，并挂载到一个元素上。
// new Profile().$mount('#app')