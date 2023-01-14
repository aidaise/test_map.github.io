import Vue from 'vue'
import App from './App.vue'
// import VueGoogleHeatmap from 'vue-google-heatmap';
import x5GMaps from "x5-gmaps";

Vue.config.productionTip = false

// Vue.use(VueGoogleHeatmap, {
//   apiKey: 'AIzaSyD2tKBjRkdAtSJthU2Wm135MmtptdoQxm8'
// });
Vue.use(x5GMaps, {
  key: "AIzaSyD2tKBjRkdAtSJthU2Wm135MmtptdoQxm8",
  libraries: ["visualization"]
});
new Vue({
  render: h => h(App),
}).$mount('#app')
