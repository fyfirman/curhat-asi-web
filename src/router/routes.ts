import * as React from 'react';
import ConsultationsHome from '@pages/admin/consultation/ConsultationHome';
import Users from '@pages/admin/user/userList/UserList';
import Calendar from '@pages/admin/calendar/Calendar';
import DashboardComponent from '@pages/admin/dashboard/DashboardList';
import ArticleHome from '@pages/admin/article/ArticleHome';

export interface Route {
  path: string;
  component?: React.ComponentType;
  name: string;
  collapsible?: boolean;
  subRoutes?: Route[];
}

export const privateRoutes: Route[] = [
  {
    path: '/dashboard',
    component: DashboardComponent,
    name: 'Dashboard',
  },
  {
    path: '/user',
    component: Users,
    name: 'Pengguna',
  },
  {
    path: '/consultation',
    component: ConsultationsHome,
    name: 'Konsultasi',
  },
  {
    path: '/article',
    component: ArticleHome,
    name: 'Artikel',
  },
  {
    path: '/calendar',
    component: Calendar,
    name: 'Diary ASI',
  },
];
