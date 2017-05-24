import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/Hello2'

const NotFoundComponent = { template: '<div>page not find</div>' }

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
		{
			path:"/",
			redirect: '/hello'
		},		
    {
      path: '/hello2/foo/:id',
      name:'hello2',
      component: Hello2,
      children: [
        // 当 /user/:id 匹配成功，
        // UserHome 会被渲染在 User 的 <router-view> 中
        { path: 'userhome', component: UserHome },
        { path: 'Profile', component: UserProfile },
        { path: 'Posts', component: UserPosts }

        // ...其他子路由
      ] 
    },{
      path: '/hello',
      component: Hello     
    },
    { path: '*', component: NotFoundComponent }
  ]
})
