'use client';

// Libs
import { JSX } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Constants
import { DASHBOARD_NAV_LINKS } from '@/constants';

// Utils
import { cn } from '@/utils';

// Types
import { CustomClassType } from '@/types';

type LinkItem = {
  name: string;
  href: string;
  icon: ({ customClass }: CustomClassType) => JSX.Element;
};

interface NavLinksProps {
  links?: LinkItem[];
}

export const NavLinks = ({ links = DASHBOARD_NAV_LINKS }: NavLinksProps) => {
  const pathname = usePathname();

  return (
    <nav className='flex grow flex-row md:grow-0 justify-between md:flex-col space-x-4 md:space-x-0 md:space-y-2 sm:mr-16 md:mr-0'>
      {links.map(({ name, href, icon }) => {
        const LinkIcon = icon;

        return (
          <Link
            key={name}
            href={href}
            className={cn(
              'flex grow md:grow-0 justify-center items-center gap-3 rounded-xl bg-transparent text-secondary-200 text-xs font-bold hover:bg-secondary-50 md:flex-none md:justify-start p-3',
              {
                'bg-primary-100 text-secondary-300 shadow-secondary-50 shadow-md':
                  pathname === href
              }
            )}
          >
            <div
              className={cn(
                'p-2 bg-primary-100 text-primary rounded-xl',
                { 'md:shadow-secondary-50 md:shadow-md': pathname !== href },
                {
                  'bg-primary text-primary-100': pathname === href
                }
              )}
            >
              <LinkIcon />
            </div>
            <p className='hidden md:block'>{name}</p>
          </Link>
        );
      })}
    </nav>
  );
};

NavLinks.displayName = 'NavLinks';
