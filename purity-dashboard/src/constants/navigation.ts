import { HomeIcon, ChartIcon, CardIcon, BuildIcon } from '@/icons';
import { ROUTES } from './routes';

export const DASHBOARD_NAV_LINKS = [
  { name: 'Dashboard', href: ROUTES.DASHBOARD, icon: HomeIcon },
  {
    name: 'Authors',
    href: ROUTES.AUTHORS,
    icon: ChartIcon
  },
  { name: 'Projects', href: ROUTES.PROJECTS, icon: CardIcon },
  { name: 'RTL', href: ROUTES.RTL, icon: BuildIcon }
];

export const FOOTER_NAVIGATION = [
  {
    url: '',
    title: 'Creative Tim'
  },
  {
    url: '',
    title: 'Simple'
  },
  {
    url: '',
    title: 'Blog'
  },
  {
    url: '',
    title: 'License'
  }
];
