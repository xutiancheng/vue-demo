<template>
  <div class="price-input">
      <input :value="str"  v-on:input="add($event.target.value)" /><span>{{str}}</span>
      
  </div>
</template>

<script>

export default {
  props:{
    value: {
      type: String,
      default: 100
    }
  },  
  name: 'myinput',
  data:function(){
    return {
      str:this.value
    }
  },
  methods: {
    add: function (event) {
      this.str = event;
      this.$emit('increment',event);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .price-input{
    color: #ff0000;
  }
</style>