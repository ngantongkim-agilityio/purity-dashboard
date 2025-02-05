// Libs
import Link from 'next/link';

// Components
import { Text } from '@/components';

// Constants
import { FOOTER_NAVIGATION, ROUTES } from '@/constants';

// Utils
import { cn } from '@/utils';

export const Footer = ({
  className = '',
  subClassName = ''
}: {
  className?: string;
  subClassName?: string;
}) => (
  <footer
    className={cn(
      'w-full flex flex-col gap-6 lg:flex-row bg-transparent py-6',
      className
    )}
  >
    <Text
      size='xs'
      className={cn('text-secondary-200 justify-center lg:w-1/2', subClassName)}
    >
      {`\u0040 2025, Made with ❤️ by `}
      <Link href={ROUTES.CREATE_TIM} className='text-primary font-bold'>
        Creative Tim
      </Link>
      {` \u0026 `}
      <Link href={ROUTES.SIMPLE} className='text-primary font-bold'>
        Simmmple
      </Link>{' '}
      for a better web
    </Text>
    <nav
      className={cn(
        'lg:w-1/2 flex justify-center gap-8 lg:justify-end',
        subClassName
      )}
    >
      {FOOTER_NAVIGATION.map(({ url, title }) => (
        <Link key={title} href={url} className='text-xs text-secondary-200'>
          {title}
        </Link>
      ))}
    </nav>
  </footer>
);
