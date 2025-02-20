import { CustomClassType } from '@/types';

export const LogoIcon = ({ customClass = 'w-6 h-6' }: CustomClassType) => (
  <svg fill='none' className={customClass}>
    <path
      fill='currentColor'
      d='M20.88 0H1.122C.502 0 0 .502 0 1.122v9.408c0 .62.502 1.122 1.122 1.122h4.054v9.228A1.12 1.12 0 0 0 6.296 22h9.408c.62 0 1.122-.502 1.122-1.122v-9.223h4.053A1.12 1.12 0 0 0 22 10.534V1.122A1.12 1.12 0 0 0 20.88 0ZM1.3 1.302h9.05v9.05H1.3v-9.05ZM15.525 20.7H6.476v-9.045h9.05V20.7Zm5.175-10.35h-9.05v-9.05h9.05v9.05Z'
    />
    <path
      fill='currentColor'
      d='M7.448 7.325a.65.65 0 0 0 .92-.92L6.291 4.327a.654.654 0 0 0-.92 0L3.288 6.405a.65.65 0 1 0 .92.92l1.617-1.618 1.623 1.618ZM14.557 7.325l1.618-1.618 1.617 1.618a.65.65 0 0 0 .92-.92l-2.077-2.078a.654.654 0 0 0-.92 0l-2.078 2.078a.65.65 0 0 0 .92.92ZM9.382 14.677a.65.65 0 0 0-.92.921l2.079 2.076a.65.65 0 0 0 .92 0l2.077-2.076a.651.651 0 1 0-.92-.921l-1.617 1.619-1.62-1.62Z'
    />
  </svg>
);
export default LogoIcon;
