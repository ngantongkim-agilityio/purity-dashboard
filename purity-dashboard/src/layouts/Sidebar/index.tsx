import Link from 'next/link';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/configs/auth';
import LogoIcon from '@/icons/LogoIcon';
import { Divider, Text, NavLinks, Image, Button } from '@/components';
import { HelpIcon } from '@/icons';
import { BACKGROUND } from '@/constants';
import { generateImageToBase64 } from '@/utils';

export const Sidebar = () => {
  return (
    <aside className='flex h-full flex-col p-8 min-w-[310px] space-y-6'>
      <Link className='flex justify-start space-x-3 px-4 py-2' href='/'>
        <LogoIcon />
        <Text
          variant='h1'
          color='tertiary'
          className='uppercase font-lora font-medium'
        >
          Purity UI Dashboard
        </Text>
      </Link>
      <Divider variant='linear' />
      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <div>
          <NavLinks />
          <div className='relative rounded-xl w-full h-[169px] mt-16'>
            <Image
              alt='Need help background'
              src={BACKGROUND.needHelp}
              blurDataURL={generateImageToBase64(218, 169)}
              className='rounded-xl'
            />
            <div className='absolute top-0 left-0 z-10 p-3 h-full w-full'>
              <div className='bg-primary-100 p-2 w-fit rounded-xl mb-6'>
                <HelpIcon />
              </div>
              <Text variant='h3' className='font-bold'>
                Need help?
              </Text>
              <Text size='xs'>Please check our docs</Text>
              <Button color='secondary' className='mt-2 w-full'>
                Documentation
              </Button>
            </div>
          </div>
        </div>
        <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
          <button className='flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'>
            <PowerIcon className='w-6' />
            <div className='hidden md:block'>Sign Out</div>
          </button>
        </form>
      </div>
    </aside>
  );
};
