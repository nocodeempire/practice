<template>
  <div>
    <mt-header fixed title="固定在顶部"></mt-header>
    <!--<div v-text="helloworld"></div>-->
    <!--<ul>-->
      <!--<li v-for="(item,index) in items" :class="{A:'a',B:'b',C:'c'}[item.score]">{{item.name}}{{index}}</li>-->
    <!--</ul>-->
    <!--<header-vue :text="helloworld"></header-vue>-->
    <!--<footer-vue></footer-vue>-->
    <!--<button @click="listen">按钮</button>-->
    <!--<input type="text" v-model="text">-->
    <!--{{text | reverse}}-->

    <!--路由-->
    <ul>
      <li v-for="item in items">
        <router-link :to="{name:'luyou',query:{id:item.id}}">{{item.name}}</router-link>
      </li>
    </ul>
    <router-view></router-view>
    <router-view name="headerVue"></router-view>
    <router-view name="fooderVue"></router-view>
    <router-view></router-view>
    <div style="height:200px">
      <mt-swipe :auto="4000">
        <mt-swipe-item><div style="height:200px;background-color:blue;"></div></mt-swipe-item>
        <mt-swipe-item><div style="height:200px;background-color:green;"></div></mt-swipe-item>
        <mt-swipe-item><div style="height:200px;background-color:yellow;"></div></mt-swipe-item>
      </mt-swipe>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="外卖">
        <img slot="icon" src="">
        外卖
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img slot="icon" src="">
        订单
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="">
        发现
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
  import headerVue from "./header.vue";
  import footerVue from "./fooder.vue";
  import  Connect from "./connect.js"
  export default {
    data(){
      return {
        helloworld:"helloworld",
        items:[
          {id:1,name:"张三",age:14,score:"A"},
          {id:2,name:"王三",age:16,score:"B"},
          {id:3,name:"李三",age:11,score:"C"}
        ],
        text:"",
        selected:""
      }
    },
    methods: { //行为
      listen(){
        Connect.$on("call",function(data){
          console.log(data);
        })
      }
    },
    components: {
      //名称 组件对象
      headerVue:headerVue,
      footerVue:footerVue
    },
    filters:{
      reverse:function(value){
        return value.split("").reverse().join("");
      }
    }
  }
</script>
<style>
.a{
  background-color: red;
}
.b{
  background-color: blue;
}
.c{
  background-color: green;
}
ul{
  margin-top: 50px;
}
</style>