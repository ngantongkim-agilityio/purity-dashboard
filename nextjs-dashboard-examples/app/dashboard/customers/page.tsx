import { Metadata } from 'next';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);

  return (
    <main>
      <Suspense fallback={<InvoicesTableSkeleton />}>
        <CustomersTable customers={customers} />
      </Suspense>
    </main>
  );
}