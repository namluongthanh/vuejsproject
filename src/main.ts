import './assets/main.css'
import './style.css'

import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faSliders } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

library.add(faMagnifyingGlass, faSliders, faGlobe)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
