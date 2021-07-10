import { createRouter, createWebHistory} from 'vue-router'; 

import Arts from '../views/Arts';
import Hotspot from '../views/Hotspots';

const routes = [
    {
        name: 'arts',
        path: '/arts',
        component: Arts,
    },
    {
        name: 'hotspots',
        path: '/hotspots',
        component: Hotspot,
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
