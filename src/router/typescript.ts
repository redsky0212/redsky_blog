export default [
    {
        path: '/typescript/studyLink',
        name: 'typescript link list',
        component: () => import('../views/typescript/StudyLink.vue'),
    },
    {
        path: '/typescript/decorator',
        name: 'typescript decorator',
        component: () => import('../views/typescript/Decorator.vue'),
    },
];
