// libs
import { Suspense } from 'react';
import { Metadata } from 'next';

// sections
import { AuthorsTable } from '@/sections';
import { LatestProductsSkeleton } from '@/sections/LatestProductsSkeleton';

// actions
import { fetchFilteredAuthors } from '@/actions';

export const metadata: Metadata = {
  title: 'Authors'
};

const AuthorsPage = async (props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) => {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const { authors } = await fetchFilteredAuthors(query);

  return (
    <main>
      <Suspense fallback={<LatestProductsSkeleton />}>
        <AuthorsTable authors={authors} />
      </Suspense>
    </main>
  );
};

export default AuthorsPage;
