import { Suspense } from 'react';
import { Metadata } from 'next';
import { Pagination, SearchInput } from '@/components';
import { fetchInvoicesPages } from '@/actions/project';
import { LatestInvoicesSkeleton } from '@/sections/LatestInvoicesSkeleton';
import { ProjectsTable } from '@/sections';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Invoices'
};

const ProjectsPage = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchInvoicesPages(query);

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`text-2xl`}>Projects</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <SearchInput placeholder='Search projects...' />
        <Link
          href='/dashboard/projects/create'
          className='flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
        >
          <span className='hidden md:block'>Create Invoice</span>{' '}
          <PlusIcon className='h-5 md:ml-4' />
        </Link>
      </div>
      <Suspense key={query + currentPage} fallback={<LatestInvoicesSkeleton />}>
        <ProjectsTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className='mt-5 flex w-full justify-center'>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default ProjectsPage;
