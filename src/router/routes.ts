import * as React from 'react';
import Consultations from '@pages/admin/consultation/consultationList/ConsultationList';
import Users from '@pages/admin/user/userList/UserList';
import Articles from '@pages/admin/article/articleList/ArticleList';
import ArticleCategories from '@pages/admin/article/articleCategories/ArticleCategories';

export interface Route {
  path: string;
  component?: React.ComponentType;
  name: string;
  collapsible?: boolean;
  subRoutes?: Route[];
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
    name: 'Artikel',
    collapsible: true,
    subRoutes: [
      {
        path: '/article/list',
        component: Articles,
        name: 'Daftar Artikel',
      },
      {
        path: '/article/category',
        component: ArticleCategories,
        name: 'Kategori Artikel',
      },
    ],
  },
];
