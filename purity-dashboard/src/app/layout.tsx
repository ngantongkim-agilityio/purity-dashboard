import { Metadata } from 'next';
import { Providers } from './provider';
import { Inter, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter'
});

const lora = Lora({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lora'
});

export const metadata: Metadata = {
  title: {
    template: '%s | Purity Dashboard',
    default: 'Purity Dashboard'
  },
  description: 'The practice for NextJS',
  metadataBase: new URL('https://nextjs-dashboard-examples.vercel.app/')
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${lora.variable} ${inter.className} bg`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
