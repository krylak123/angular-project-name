import { NavItem } from '../../../../../core/models/nav-item.interface';
export const navConfig: NavItem[] = [
  {
    name: 'Pulpit',
    path: '/dashboard/',
    iconName: 'home',
  },
  {
    name: 'Mój Profil',
    path: '/dashboard/profile',
    iconName: 'person',
  },
  {
    name: 'Plan Zajęć',
    path: '/dashboard/plan',
    iconName: 'schedule',
  },
  {
    name: 'Moje Oceny',
    path: '/dashboard/grades',
    iconName: 'emoji_events',
  },
  {
    name: 'Informacje',
    path: '/dashboard/info',
    iconName: 'info',
  },
];
