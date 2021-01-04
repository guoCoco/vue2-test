import Vue from 'vue'
import App from './App.vue'
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'

Vue.config.productionTip = false
Vue.use(Viewer)
Viewer.setDefaults({
  Options: { 'inline': true, 'button': true, 'navbar': true, 'title': true, 'toolbar': true, 'tooltip': true, 'movable': true, 'zoomable': true, 'rotatable': true, 'scalable': true, 'transition': true, 'fullscreen': true, 'keyboard': true, 'url': 'data-source' }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
