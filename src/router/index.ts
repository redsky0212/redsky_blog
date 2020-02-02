import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../views/Main.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
  },
  {
    path: '/vue',
    name: 'vueMain',
    component: () => import('../views/vue/VueMain.vue'),
  },
  {
    path: '/vue/preferences',
    name: 'vuePreferences',
    component: () => import('../views/vue/VuePreferences.vue'),
  },
  {
    path: '/vue/understand/slot',
    name: 'vue-slot',
    component: () => import('../views/vue/understand/slot/Slot1.vue'),
  },
  {
    path: '/vue/understand/component/vmodel',
    name: 'componentVModel',
    component: () => import('../views/vue/understand/component/UseVmodel.vue'),
  },
  {
    path: '/vue/understand/mixin',
    name: 'vue-mixin',
    component: () => import('../views/vue/understand/mixin/Mixin1.vue'),
  },
  {
    path: '/vue/vuex/typescript/makeStore',
    name: 'ts-makeStore',
    component: () => import('../views/vue/vuex/typescript/ts-makeStore.vue'),
  },
  {
    path: '/vue/vuex/typescript/moduleStore',
    name: 'ts-moduleStore',
    component: () => import('../views/vue/vuex/typescript/ts-moduleStore.vue'),
  },
  {
    path: '/vue/etc',
    name: 'vueEtc',
    component: () => import('../views/vue/VueEtc.vue'),
  },
  {
    path: '/typescript/studyLink',
    name: 'typescript link list',
    component: () => import('../views/typescript/StudyLink.vue'),
  },
  {
    path: '/test',
    name: 'TestComp',
    component: () => import('../views/TestComp.vue'),
  },
  {
    path: '/test/comment',
    name: 'TestCompComment',
    component: () => import('../views/TestCompComment.vue'),
  },
  {
    path: '/404',
    component: () => import('../views/NotFound.vue'),
  },
  {
    path: '*',
    redirect: '/404',  // 404로 redirect
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
