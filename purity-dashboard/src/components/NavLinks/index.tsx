'use client';

import { DASHBOARD_NAV_LINKS } from '@/constants';
import { CustomClassType } from '@/types';
import { cn } from '@/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { JSX } from 'react';

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
    <nav>
      <ul>
        {links.map(({ name, href, icon }) => {
          const LinkIcon = icon;

          return (
            <li key={name}>
              <Link
                href={href}
                className={cn(
                  'flex items-center gap-3 rounded-xl bg-transparent text-secondary-200 text-xs font-bold hover:bg-secondary-50 md:flex-none md:justify-start p-3',
                  {
                    'bg-primary-100 text-secondary-300 shadow-secondary-50 shadow-md':
                      pathname === href
                  }
                )}
              >
                <div
                  className={cn(
                    'p-2 bg-primary-100 text-primary rounded-xl',
                    { 'shadow-secondary-50 shadow-md': pathname !== href },
                    {
                      'bg-primary text-primary-100': pathname === href
                    }
                  )}
                >
                  <LinkIcon />
                </div>
                <p className='hidden md:block'>{name}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

NavLinks.displayName = 'NavLinks';
