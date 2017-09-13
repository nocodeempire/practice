/**
 * Created by Administrator on 2017/9/12.
 */
import Vue from "vue";
import Mintui from "mint-ui";
import "mint-ui/lib/style.css";
import App from "./App.vue";
import VueRouter from "vue-router";
import Who from "./who.vue";
import headerVue from "./header.vue";
import fooderVue from "./fooder.vue";

Vue.use(Mintui);
Vue.use(VueRouter);

var router=new VueRouter({
  routes:[
    {path:"/who",name:"luyou",component:Who},
    {path:"/comp",name:"comp",
      components:{
        headerVue:headerVue,
        fooderVue:fooderVue
      }
    }
  ]
})

new Vue({
  el:"#app",
  router,
  render:h=>h(App)
})