import { Suspense } from 'react';

import {
  AnalyticsCards,
  CardsSkeleton,
  LatestProjects,
  ReadMore,
  RevenueChartSkeleton
} from '@/sections';
import { LatestInvoicesSkeleton } from '@/sections/LatestInvoicesSkeleton';
import { SaleChart } from '@/sections';

const Dashboard = () => {
  return (
    <main className='space-y-6'>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <section className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Suspense fallback={<CardsSkeleton />}>
          <AnalyticsCards />
        </Suspense>
      </section>
      <ReadMore />
      <section className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <SaleChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestProjects />
        </Suspense>
      </section>
    </main>
  );
};

export default Dashboard;
