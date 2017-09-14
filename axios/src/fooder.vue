<template>
<div>
  <button @click="send">传递数据</button>
</div>
</template>
<script>
  import Connect from "./connect.js"
  export default {
    data(){
      return {}
    },
    methods: { //行为
      send(){
        Connect.$emit("call",{name:"foot"})
      }
    },
    components: {
      //名称 组件对象
    }
  }
</script>
<style>

</style>