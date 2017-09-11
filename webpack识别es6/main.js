/**
 * Created by Administrator on 2017/9/11.
 */
import Kong from "./kong.js";

import {hand} from "./person.js";
import {foot} from "./person.js";


import Vue from "vue";
import App from "./App.vue";

console.log(hand);
console.log(foot);

new Vue({
  el:'#app',
  render:h=>h(App)
})