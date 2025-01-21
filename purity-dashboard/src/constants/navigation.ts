import { HomeIcon, ChartIcon, CardIcon, BuildIcon } from '@/icons';

export const DASHBOARD_NAV_LINKS = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Tables',
    href: '/dashboard/tables',
    icon: ChartIcon
  },
  { name: 'Billing', href: '/dashboard/billing', icon: CardIcon },
  { name: 'RTL', href: '/dashboard/rtl', icon: BuildIcon }
];
