// Libs
import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { PlusIcon } from '@heroicons/react/24/outline';

// Components
import { Pagination, SearchInput } from '@/components';

// Sections
import { ProductsTable } from '@/sections';

// Actions
import { fetchProductsPages } from '@/services';
import { TableSkeleton } from '@/sections/TableSkeleton';

export const metadata: Metadata = {
  title: 'Products'
};

const ProductsPage = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const { totalPages } = await fetchProductsPages(query);

  return (
    <div className='w-full'>
      <div className='flex w-full items-center justify-between'>
        <h1 className={`text-2xl`}>Products</h1>
      </div>
      <div className='mt-4 flex items-center justify-between gap-2 md:mt-8'>
        <SearchInput placeholder='Search products...' />
        <Link
          href='/dashboard/products/create'
          className='flex h-10 items-center rounded-lg bg-transparent border-primary border-3 px-4 text-sm font-medium text-primary transition-colors hover:border-secondary-200 hover:text-secondary-200 focus-visible:text-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-100'
        >
          <span className='hidden md:block'>Create Product</span>{' '}
          <PlusIcon className='h-5 md:ml-4' />
        </Link>
      </div>
      <Suspense key={query + currentPage} fallback={<TableSkeleton />}>
        <ProductsTable query={query} currentPage={currentPage} />
      </Suspense>
      <div className='mt-5 flex w-full justify-center'>
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default ProductsPage;
