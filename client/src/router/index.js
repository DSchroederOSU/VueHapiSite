import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import Posts from '@/components/Posts'
import CardView from '@/components/CardView'

Vue.use(Router)
export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/gallery',
      name: 'Gallery',
      component: Posts
    },
    {
      path: '/card/:id',
      name: 'Card',
      component: CardView
    }
  ]
})
