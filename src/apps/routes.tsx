import React from 'react';
import { HomeView, LoginView } from '@/views';

export default [
  {
    path: '/',
    exact: true,
    component: () => <HomeView />,
  },
  {
    path: '/login',
    exact: true,
    component: () => <LoginView />,
  },
];
