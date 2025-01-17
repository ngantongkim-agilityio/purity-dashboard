import { Metadata } from 'next';
import { Providers } from './provider';
import { Inter, Montserrat } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter'
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
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
        className={`${inter.variable} ${montserrat.variable} ${inter.className}`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
