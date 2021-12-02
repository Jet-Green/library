import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
  path: '/about',
  name: 'About',

  component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
},
{
  path: '/book',
  name: 'Book',

  component: () => import( /* webpackChunkName: "about" */ '../components/Book.vue')
},
{
  path: '/takebook',
  name: 'TakeBook',
  component: () => import( /* webpackChunkName: "takebook" */ '../components/TakeBook.vue')
},
{
  path: '/',
  name: 'ListOfBooks',
  component: () => import( /* webpackChunkName: "takebook" */ '../components/ListOfBooks.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router