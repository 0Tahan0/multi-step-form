import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./css/root.css";
import specialTitle from "@/components/specialTitle.vue";
Vue.component("special-title", specialTitle);
import toggleBtn from "@/components/UI/toggleBtn.vue";
Vue.component("toggle-btn", toggleBtn);
import checkBox from "@/components/UI/checkBox.vue";
Vue.component("check-box", checkBox);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
