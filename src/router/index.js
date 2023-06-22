import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login/LoginView')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/RegisterView.vue')
  },
  {
    path: '/employees',
    name: 'employees',
    component: () => import('../views/employee/EmployeeView.vue')
  },
  {
    path: '/adm',
    name: 'adm',
    component: () => import('../views/adm/AdmView.vue')
  },  {
    path: '/administration',
    name: 'administration',
    component: () => import('../views/administartion/AdministrationView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
