import { NavItem } from '@core/models/nav-item.interface';

export const InfoRoutesItems: NavItem[] = [
  {
    path: 'contact',
    name: 'Kontakt',
    iconName: 'call',
  },
  {
    path: 'organization',
    name: 'Organizacja',
    iconName: 'corporate_fare',
    isDisabled: true,
  },
  {
    path: 'practices',
    name: 'Praktyki',
    iconName: 'engineering',
    isDisabled: true,
  },
  {
    path: 'prints',
    name: 'Druki',
    iconName: 'local_printshop',
  },
];
