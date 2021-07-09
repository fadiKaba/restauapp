import { createRouter, createWebHistory} from 'vue-router'; 

import Arts from '../views/Arts';
import Hotspot from '../views/Hotspots';

const routes = [
    {
        name: 'arts',
        path: '/search/arts',
        component: Arts,
    },
    {
        name: 'hotspots',
        path: '/search/hotspots',
        component: Hotspot,
    },
    { path: "/:catchAll(.*)", redirect: '/search/arts' }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
