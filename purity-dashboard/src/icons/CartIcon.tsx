import { CustomClassType } from '@/types';

export const CartIcon = ({
  customClass = 'w-6 h-6 text-primary-100'
}: CustomClassType) => (
  <svg fill='none' className={customClass}>
    <path
      fill='currentColor'
      d='M8.484 19.937a1.406 1.406 0 1 0 0-2.812 1.406 1.406 0 0 0 0 2.812ZM18.328 19.937a1.406 1.406 0 1 0 0-2.812 1.406 1.406 0 0 0 0 2.812ZM20.824 5.558a1.052 1.052 0 0 0-.816-.386H6.634l-.27-1.528a.703.703 0 0 0-.692-.581H2.859a.703.703 0 0 0 0 1.406h2.223l2.006 11.372a.703.703 0 0 0 .693.581h11.25a.703.703 0 0 0 0-1.406H8.37l-.248-1.406h10.62a1.058 1.058 0 0 0 1.035-.848l1.266-6.328a1.055 1.055 0 0 0-.22-.876Z'
    />
  </svg>
);
