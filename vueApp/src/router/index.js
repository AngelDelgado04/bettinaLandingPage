import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Form from '../components/Form.vue';
import ThankYou from '../components/ThankYou.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/form', component: Form },
  { path: '/thank-you', component: ThankYou }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
