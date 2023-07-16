import { createRouter, createWebHistory } from 'vue-router';
import HomeComp from '../views/HomeComp.vue'
import AboutComp from '../views/AboutComp.vue'
import MovieDetail from '../views/MovieDetail.vue'

const routes = [
    {
      path: '/', 
      name: 'Home',
      component: HomeComp
    },
    {
        path: '/about', 
        name: 'About',
        component: AboutComp
    },
    {
        path: '/movie/:id', 
        name: 'Movie Detail',
        component: MovieDetail
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;