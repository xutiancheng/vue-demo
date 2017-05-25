<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <li><router-link to="/hello">Go to Foo1</router-link></li>
      <li><router-link :to="{ name: 'hello2', params: { id: 123 }}" target="_blank">Go to Foo2</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/hello2/foo/userhome">/user/foo/userhome</router-link></li>
      <li><router-link to="/hello2/foo/profile">/user/foo/profile</router-link></li>
      <li><router-link to="/hello2/foo/posts">/user/foo/posts</router-link></li>
    </ul>
    <div>{{ xx|message }}</div>
    <sort  :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery"></sort>
    <input v-focus v-model="gridData[0].name"/>{{gridData[0].name}}
    <router-view></router-view>
  </div>
</template>

<script>
 import sort  from "./components/sort.vue";
 var data = {
    xx:'ttt',
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
export default {
  components:{sort},
  name: 'app',
  data:function(){
   return data
  },
   filters: {
    message: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  // directives: {
  //   focus: function(el){
      
  //     el.focus();
      
  //   }
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
