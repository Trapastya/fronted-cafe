import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Notifications from "vue-notification";

Vue.config.productionTip = false;

import VueModalTor from "vue-modaltor/dist/vue-modaltor.common";
import "vue-modaltor/dist/vue-modaltor.css";

Vue.use(VueModalTor, {
    bgPanel: "#7957d5"  // add custome options
});

Vue.use(Notifications);

new Vue({
  Notifications,
  el: "#app",
  router,
  store,
  render: (h) => h(App),
  template: "<App/>",
  components: {
    App
  },

  methods: {

    //type: ['success', 'warn', 'error']; duration in ms; 

    showNotification(params) {
      const { text, type = 'success', duration = 5000, title = null, closeOnClick = true } = params;
      this.$notify({
        group: 'notify',
        text,
        type,
        duration,
        title: title ? title : null,
        closeOnClick
      });
      return;
    }
  }

}).$mount("#app");; 
