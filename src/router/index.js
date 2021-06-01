import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/view/home'),
      children: [
        {
          path: '/A',
          name: 'A',
          components: {
            namea: () => import('@/view/tabChild/A'),
            nameb:() => import('@/view/tabChild/B')
          } 
        },
       
      ]
    },
    // {
    //   path: 'A',
    //   name: 'A',
    //   component: () => import('@/view/tabChild/A')
    // },
  ]
})