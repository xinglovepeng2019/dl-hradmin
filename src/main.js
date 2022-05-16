import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button, Select,Input, Form,FormItem,} from 'element-ui';


Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
