import { HomeIcon, ChartIcon, CardIcon, BuildIcon } from '@/icons';
import { ROUTES } from './routes';

export const DASHBOARD_NAV_LINKS = [
  { name: 'Dashboard', href: ROUTES.DASHBOARD, icon: HomeIcon },
  {
    name: 'Authors',
    href: ROUTES.AUTHORS,
    icon: ChartIcon
  },
  { name: 'Products', href: ROUTES.PRODUCTS, icon: CardIcon },
  { name: 'RTL', href: ROUTES.RTL, icon: BuildIcon }
];

export const FOOTER_NAVIGATION = [
  {
    url: ROUTES.CREATE_TIM,
    title: 'Creative Tim'
  },
  {
    url: ROUTES.SIMPLE,
    title: 'Simple'
  },
  {
    url: ROUTES.BLOG,
    title: 'Blog'
  },
  {
    url: ROUTES.LICENSE,
    title: 'License'
  }
];
