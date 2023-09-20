import { createApp } from 'vue'
import App from './App.vue'

import { Quasar, options } from './plugins/quasar'

createApp(App)
  .use(Quasar, options)
  .mount('#app')
