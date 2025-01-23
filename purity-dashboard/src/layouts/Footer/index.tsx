import Link from 'next/link';
import { FOOTER_NAVIGATION, ROUTES } from '@/constants';
import { Text } from '@/components';

export const Footer = () => (
  <footer className='w-full grid grid-cols-1 gap-6 md:grid-cols-2 bg-transparent py-6'>
    <Text size='xs' className='text-secondary-200'>
      {`\u0040 2025, Made with ❤️ by `}
      <Link href={ROUTES.CREATE_TIM} className='text-primary font-bold'>
        Creative Tim
      </Link>
      {`\u0026 `}
      <Link href={ROUTES.SIMPLE} className='text-primary font-bold'>
        Simmmple
      </Link>{' '}
      for a better web
    </Text>
    <nav className='w-full flex gap-8 lg:justify-end'>
      {FOOTER_NAVIGATION.map(({ url, title }) => (
        <Link key={title} href={url} className='text-xs text-secondary-200'>
          {title}
        </Link>
      ))}
    </nav>
  </footer>
);
