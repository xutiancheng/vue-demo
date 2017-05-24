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
    <input v-focus/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data:function(){
   return {xx:'ttt'}
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
