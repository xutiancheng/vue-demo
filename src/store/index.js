import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); 
 
const store = new Vuex.Store({  
  state: {  
    count: 10,  
    numb: 10086  
  }, 
    mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  } 
  // getters: {  
  //   add: (state, getter) => {  
  //     state.count = getter.add;  
  //     return state.count;  
  //   },  
  // },  
  // mutations: {  
  //   increment(state,){  
  //       state.count += 2;  
  //   },  
  // },  
  // actions: {  
  //   actionA({ dispatch, commit }) {  
  //     return commit('add');  
  //   },  
  // }  
});  
  
export default store; 