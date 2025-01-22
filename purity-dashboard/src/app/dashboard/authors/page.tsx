import { fetchFilteredCustomers } from '@/actions/author';
import { AuthorsTable } from '@/sections';
import { LatestInvoicesSkeleton } from '@/sections/LatestInvoicesSkeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Customers'
};

const AuthorsPage = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <Suspense fallback={<LatestInvoicesSkeleton />}>
        <AuthorsTable customers={customers} />
      </Suspense>
    </main>
  );
};

export default AuthorsPage;
