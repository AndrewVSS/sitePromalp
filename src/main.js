import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBrush, faUserSecret, faTable, faChain, faSnowflake, faTree, faTint, faShield, faCubes, faClock, faUser, faMoneyBill, faCheckCircle} from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret, faBrush, faTable, faChain, faSnowflake, faTree, faTint, faShield, faCubes, faClock, faUser, faMoneyBill, faCheckCircle)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
