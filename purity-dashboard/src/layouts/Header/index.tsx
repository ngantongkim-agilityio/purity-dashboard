import { ThemeSwitcher } from '@/components';

export const Header = () => {
  return (
    <section className='flex flex-row justify-end'>
      <ThemeSwitcher className='static p-0' />
    </section>
  );
};
