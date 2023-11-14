import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'main' },
      component: () => import('@/views/CatalogPage.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      meta: { layout: 'main' },
      component: () => import('@/views/ProductPage')
    },
    {
      path: '/cart',
      name: 'cart',
      meta: { layout: 'main' },
      component: () => import('@/views/CartPage')
    }
    // {
    //   path: '/record',
    //   name: 'record',
    //   meta: { layout: 'main' },
    //   component: () => import('@/views/MyRecord.vue')
    // },
    // {
    //   path: '/detail/:id',
    //   name: 'detail',
    //   meta: { layout: 'main' },
    //   component: () => import('@/views/DetailRecord.vue')
    // },
    // {
    //   path: '/history',
    //   name: 'history',
    //   meta: { layout: 'main' },
    //   component: () => import('@/views/MyHistory.vue')
    // },
    // {
    //   path: '/planning',
    //   name: 'planning',
    //   meta: { layout: 'main' },
    //
    //   component: () => import('@/views/MyPlanning.vue')
    // },
    // {
    //   path: '/profile',
    //   name: 'profile',
    //   meta: { layout: 'main' },
    //   component: () => import('@/views/UserProfile.vue')
    // }
  ]
});

export default router;
