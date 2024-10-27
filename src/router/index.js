import { createRouter, createWebHistory } from 'vue-router'
import WalletView from '../views/WalletView.vue'
import AirtimeView from '../views/AirtimeView.vue'
import DataView from '../views/DataView.vue'
import SettingsView from '../views/SettingsView'
import PayoutView from '../views/PayoutView'
import FinanceView from '../views/FinanceView'
import CompanyDetailView from '../views/CompanyDetailView'
import LoginView from '../views/LoginView.vue'
import RegistrationView from '../views/RegistrationView.vue'

import BaseLayout from '@/layouts/BaseLayout.vue';
import MerchantLayout from '@/layouts/MerchantLayout.vue';
import DetailsLayout from '@/layouts/DetailsLayout.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/join',
    name: 'join',
    component: RegistrationView
  },
  {
    path: '/',
    component: BaseLayout,
    children: [
      {
        path: '',
        component: WalletView,
        meta: { title: 'Overview', transition: 'slide-right' },
      },
      {
        path: 'airtime',
        component: AirtimeView,
        meta: { title: 'Airtime', transition: 'slide-left' },
      },
      {
        path: 'data',
        component: DataView,
        meta: { title: 'Data', transition: 'slide-left' },
      },
      {
        path: 'settings',
        component: SettingsView,
        meta: { title: 'Settings', transition: 'slide-left' },
      },
      {
        path: 'finance',
        component: FinanceView,
        meta: { title: 'Finance', transition: 'slide-left' },
      },


    ],
  },
  {
    path: '/payout',
    component: MerchantLayout,
    children: [
      {
        path: '',
        component: PayoutView,
        meta: { title: 'Payout', transition: 'slide-right' },
      },

    ],
  },
  {
    path: '/details',
    component: DetailsLayout,
    children: [
      {
        path: '',
        component: PayoutView,
        meta: { title: 'Payout', transition: 'slide-right' },
      },
      {
        path: 'company/:id',
        component: CompanyDetailView,
        meta: { title: 'Package Details', transition: 'slide-left' },
      },

    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
