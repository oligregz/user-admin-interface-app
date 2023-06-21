import { createRouter, createWebHistory } from 'vue-router';

import LoginView from '../views/login/LoginView.vue';
import RegisterView from '../views/register/RegisterView.vue';
import EmployeeView from '../views/employee/EmployeeView.vue';
import AdmView from '../views/adm/AdmView.vue';


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/employee',
    name: 'employee',
    component: EmployeeView
  },
  {
    path: '/adm',
    name: 'adm',
    component: AdmView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
