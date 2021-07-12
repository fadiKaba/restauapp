import { createRouter, createWebHistory} from 'vue-router'; 

import Arts from '../views/Arts';
import Hotspots from '../views/Hotspots';
import Lifes from '../views/Lifes';
import Tags from '../views/Tags';

const routes = [
    {
        name: 'arts',
        path: '/arts',
        component: Arts,
    },
    {
        name: 'hotspots',
        path: '/hotspots',
        component: Hotspots,
    },
    {
        name: 'life',
        path: '/lifes',
        component: Lifes,
    },
    {
        name: 'tag',
        path: '/tags',
        component: Tags,
    },
    // {
    //     name: 'default',
    //     path: '/',
    //     component: Arts,
    // },
    { path: "/:catchAll(.*)", redirect: '/arts' }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
