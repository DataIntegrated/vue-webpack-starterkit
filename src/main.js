'use strict';

import Vue from 'vue';
import routing from './tools/simplerouter';
import App from './App.vue';

let router = routing(window);

new Vue({
  el: '#app',
  render: h => h(App)
});