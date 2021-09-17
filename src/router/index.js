import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Products from '../views/products/Products.vue'
import Category from '../views/products/Category.vue'
import ProductDetail from '../views/products/ProductDetail.vue'
import Cart from '../views/Cart.vue'
import ThankYou from '../views/ThankYou.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },  
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: Category,
    props: true
  },
  {
    path: '/productDetail/:id',
    name: 'ProductDetail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/thankyou',
    name: 'ThankYou',
    component: ThankYou
  },
  // redirects
  {
    path: '/about-us',
    redirect: '/about'
  },
  // catch all 404
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
