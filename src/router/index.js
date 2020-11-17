import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/frame.vue'),
    children: [
      {
        path: '/',
        component: () => import('../views/Top.vue')
      },
      {
        path: '/news',
        component: () => import('../views/News.vue')
      },
      {
        path: '/reservation',
        component: () => import('../views/Reservation.vue')
      },
      {
        path: '/reservation2',
        component: () => import('../views/Reservation2.vue')
      },
      {
        path: '/register',
        component: () => import('../views/Register.vue')
      },
      {
        path: '/login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/personalInfo',
        component: () => import('../views/PersonalInfo.vue')
      },
      {
        path: '/reservationQuestion',
        component: () => import('../views/ReservationQuestion.vue')
      },
      {
        path: '/sample2',
        component: () => import('../views/sample2.vue')
      },
      {
        path: '/reservationSearch',
        component: () => import('../views/ReservationSearch.vue')
      },
      {
        path: '/template',
        component: () => import('../views/template.vue')
      },
      {
        path: '/setting',
        name: 'Setting',
        component: () => import('../views/Setting.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
