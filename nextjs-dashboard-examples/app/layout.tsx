import '@/app/ui/global.css';
import { inter } from '@/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | NganTong Dashboard',
    default: 'NganTong Dashboard',
  },
  description: 'The examples Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-examples.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
