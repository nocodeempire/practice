<template>
  <input type="text" v-model="id">

</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        id:0
      }
    },
    methods: { //行为
      
    },
    components: {
      //名称 组件对象
    },
    created:function(){
      console.dir(this.$route);
      this.id=this.$route.query.id;
    }
  }
</script>
<style>

</style>