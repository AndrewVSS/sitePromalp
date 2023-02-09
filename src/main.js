import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

/* import specific icons */
import { faBrush, faUserSecret, faTable, faChain, faSnowflake, faTree, faTint, faShield, faCubes, faClock, faUser, faMoneyBill, faCheckCircle, faBars} from '@fortawesome/free-solid-svg-icons'



/* add icons to the library */
library.add(faUserSecret, faBrush, faTable, faChain, faSnowflake, faTree, faTint, faShield, faCubes, faClock, faUser, faMoneyBill, faCheckCircle, faWhatsapp, faBars)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
