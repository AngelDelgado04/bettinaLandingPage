import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import AboutMe from './components/AboutMe.vue';
import FormClient from './components/FormClient.vue'; 
import ThankYou from './components/ThankYou.vue';

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'AboutMe',
    component: AboutMe,
  },
  {
    path: '/form',
    name: 'FormClient',
    component: FormClient,
  },
  {
    path: '/thank-you',
    name: 'ThankYou',
    component:ThankYou
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
