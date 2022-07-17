import Vue from 'vue'
import App from './App.vue'
// ////////////////////////////////////
import vuetify from './plugins/vuetify'
// ////////////////////////////////////
import router from '@/router/router'
// ////////////////////////////////////
import store from '@/store/store'
// ////////////////////////////////////
import '@/assets/style/style.css'
// ////////////////////////////////////
import Unicon from 'vue-unicons/dist/vue-unicons-vue2.umd'
import { uniUser, uniCar, uniLuggageCart, uniChartLine, uniWrench, uniAngleLeftB, uniBookmark, uniInstagram, uniTwitterAlt, uniLinkedin , uniAlignJustify } from 'vue-unicons/dist/icons'
Unicon.add([uniUser, uniCar, uniLuggageCart, uniChartLine, uniWrench, uniAngleLeftB, uniBookmark, uniInstagram, uniTwitterAlt, uniLinkedin , uniAlignJustify])
Vue.use(Unicon)
// ////////////////////////////////////
Vue.config.productionTip = false
// ////////////////////////////////////
new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
