import { CustomClassType } from '@/types';

export const DocumentIcon = ({
  customClass = 'w-6 h-6 text-primary-100'
}: CustomClassType) => (
  <svg fill='none' className={customClass}>
    <path
      fill='currentColor'
      stroke='#4FD1C5'
      strokeWidth={0.023}
      d='M13.406 10.106h6.152a.164.164 0 0 1 .164.164v8.262a2.8 2.8 0 0 1-2.8 2.8H7.078a2.8 2.8 0 0 1-2.8-2.8V4.469a2.8 2.8 0 0 1 2.8-2.8h4.043a.164.164 0 0 1 .164.163v6.153a2.121 2.121 0 0 0 2.121 2.12Zm-4.922 7.031h7.031a.715.715 0 0 0 0-1.43h-7.03a.715.715 0 0 0 0 1.43Zm0-3.516h7.031a.715.715 0 0 0 0-1.43h-7.03a.715.715 0 0 0 0 1.43Z'
    />
    <path
      fill='currentColor'
      stroke='#4FD1C5'
      strokeWidth={0.023}
      d='m12.844 2.228 6.32 6.32-6.32-6.32Zm0 0a.076.076 0 0 0-.082-.017.077.077 0 0 0-.048.07v5.705a.691.691 0 0 0 .692.691h5.704a.076.076 0 0 0 .075-.09.076.076 0 0 0-.02-.04l-6.32-6.32Z'
    />
  </svg>
);
