<template>
  <div>
    <div v-text="helloworld"></div>
    <ul>
      <li v-for="(item,index) in items" :class="{A:'a',B:'b',C:'c'}[item.score]">{{item.name}}{{index}}</li>
    </ul>
    <header-vue :text="helloworld"></header-vue>
    <footer-vue></footer-vue>
    <button @click="listen">按钮</button>
    <input type="text" v-model="text">
    {{text | reverse}}
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
        text:""
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
</style>