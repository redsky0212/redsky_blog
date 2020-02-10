export default [
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
        path: '/vue/understand/customDirective',
        name: 'vue-customDirective',
        component: () => import('../views/vue/understand/customDirective/CustomDirective.vue'),
    },
];
