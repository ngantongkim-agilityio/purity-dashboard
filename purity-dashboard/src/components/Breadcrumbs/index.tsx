// Libs

import Link from 'next/link';

// Utils
import { cn } from '@/utils';

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export const Breadcrumbs = ({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) => {
  return (
    <nav aria-label='Breadcrumb' className='mb-6 block'>
      <ol className='flex text-xl md:text-2xl'>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={cn(
              breadcrumb.active ? 'text-secondary-300' : 'text-secondary-200'
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className='mx-3 inline-block'>/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};
