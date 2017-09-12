<template>
  <div>
    <div>{{text}} {{text}}</div>
    <div v-for="hero in suaixuan(heros)">{{hero.name}}</div>
    <!--变化select下拉框,上面的div变化.. 数据驱动!!-->
    <select name="" @click="change" v-model="range">
      <option value="" selected="selected" disabled>请选择</option>
      <option value="18">18</option>
      <option value="24">24</option>
      <option value="30">30</option>
    </select>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        range:"",
        heros:[
          {name:"aa",age:18},
          {name:"bb",age:34},
          {name:"cc",age:24},
          {name:"dd",age:30}
        ]
      }
    },
    methods: { //行为
      suaixuan(heros){
        let list=[];
        this.heros.forEach((val) =>{
          if(val.age>this.range){
            list.push(val);
          }
        })
        return list;
      },
      change(){
        console.log(this.range);
      }
    },
    components: {
      //名称 组件对象
    },
    props:["text"]
  }
</script>
<style>

</style>