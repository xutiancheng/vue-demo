<template>
  <div id="app" @keyup.enter="visible = true">
    <img src="./assets/logo.png">
    <ul :id="ulID">
      <li><router-link to="/hello">Go to Foo1</router-link></li>
      <li><router-link :to="{ name: 'hello2', params: { id: 123 }}" target="_blank">Go to Foo2</router-link></li>
    </ul>
    <ul>
      <li><router-link to="/hello2/foo/userhome">/user/foo/userhome</router-link></li>
      <li><router-link to="/hello2/foo/profile">/user/foo/profile</router-link></li>
      <li><router-link to="/hello2/foo/posts">/user/foo/posts</router-link></li>
    </ul>
    <div>{{ xx|message }}</div>
    <div v-text="gridData[0].name"></div>
    <sort  :data="gridData"
    :columns="gridColumns"
    :filter-key="searchQuery"></sort>
    <input v-focus v-model="gridData[0].name"  />{{gridData[0].name}}
    <button @click="test">加{{count}}</button>

    <el-button  @click="visible = true" >按钮</el-button>
    <el-dialog v-model="visible" title="Hello world">
      <p>欢迎使用 Element</p>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取 消</el-button>
      <el-button type="primary" @click="visible = false">确 定</el-button>
    </span>      
    </el-dialog>
    <myinput v-model="xx" v-on:increment="incrementTotal"></myinput>
    <input type="checkbox" id="checkbox" v-model="checked"   v-bind:true-value="a"
  v-bind:false-value="b">
    <label for="checkbox">{{ checked }}</label>
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>   



    <ul>
        <li v-for="(opt,index) in gridData">
            <p class="text-success" v-on:click="getIndex(index)">Text:{{opt.name}}--Vlue:{{opt.power}}</p>
        </li>
    </ul>
    <div v-if="isNaN(click)==false">
        <span>你点击的索引为: {{ click }}</span>
    </div> 
    <router-view></router-view>
  </div>
</template>

<script>
 import sort  from "./components/sort.vue";
 import myinput  from "./components/input.vue";
 import {mapState,mapActions} from 'vuex'; 
 var data = {
    click:'a',
    a:true,
    b:false,
    checkedNames:[],
    checked:false,
    ulID:'ID',
    visible: false,
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
  components:{sort,myinput},
  name: 'app',
  data:function(){
   return data
  },
  mounted:function(){
    this.onload();
  },
  filters: {
    message: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    }
  },
  methods:{
      onload(){
        console.log(4);
      },  
      increment(){  
        //this.$store.dispatch('incrementsync').then(() => {  
          console.log(this.$store);  
        //});  
      },test(){
        console.log(1);
        this.xx = 'sdf'
      },getIndex($index){
        console.log($index)
        this.click=$index;
      },incrementTotal(val) {
        this.xx = val;
      }   
    },  
    computed: mapState({ // mapState相当于映射  
        count: 'numb',  //这个时候count应该等于多少？！！ 是等于store文件里面的count呢还是等于numb？答案是等于numb！这边的意思是mapState把'numb'的值映射给了count，所以count等于10086  
    })  
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
