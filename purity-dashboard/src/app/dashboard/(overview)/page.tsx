import { Suspense } from 'react';

import {
  AnalyticsCards,
  CardsSkeleton,
  LatestInvoices,
  RevenueChartSkeleton
} from '@/sections';
import { LatestInvoicesSkeleton } from '@/sections/LatestInvoicesSkeleton';
import RevenueChart from '@/sections/RevenueChart';

const Dashboard = () => {
  return (
    <section>
      <h1 className={`mb-4 text-xl md:text-2xl`}>Dashboard</h1>
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        <Suspense fallback={<CardsSkeleton />}>
          <AnalyticsCards />
        </Suspense>
      </div>
      <div className='mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8'>
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </section>
  );
};

export default Dashboard;
