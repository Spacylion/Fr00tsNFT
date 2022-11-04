import Vue from "vue"
import App from "./App.vue"
import store from "./store/store.js"
import Toasted from "vue-toasted"
import "./index.css"

Vue.use(Toasted, {
  duration: 3000,
  position: "top-center",
  theme: "bubble",
})

Vue.config.productionTip = false

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app")
