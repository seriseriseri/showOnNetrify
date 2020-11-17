import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueLodash from 'vue-lodash'
import lodash from 'lodash'
import messages from '../webpack/vue-i18n-resource-loader/messages.i18n'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'ja',
  fallbackLocale: 'ja',
  messages: messages,
})

library.add(fas, far, fab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Buefy, {
  defaultProgrammaticPromise: true,
  defaultIconComponent: 'font-awesome-icon',
  defaultIconPack: 'fas',
})

Vue.use(VueLodash, { lodash: lodash })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  i18n
}).$mount('#app')
