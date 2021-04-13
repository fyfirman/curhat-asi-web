import * as React from 'react';
import Consultations from '@pages/admin/consultation/consultationList/ConsultationList';
import Users from '@pages/admin/user/userList/UserList';
import Articles from '@pages/admin/article/articleList/ArticleList';

export interface Route {
  path: string;
  component: React.ComponentType;
  name: string;
  collapsible?: boolean;
}

export const privateRoutes: Route[] = [
  {
    path: '/user',
    component: Users,
    name: 'Pengguna',
  },
  {
    path: '/consultation',
    component: Consultations,
    name: 'Konsultasi',
  },
  {
    path: '/article',
    component: Articles,
    name: 'Artikel',
    collapsible: true,
  },
];
