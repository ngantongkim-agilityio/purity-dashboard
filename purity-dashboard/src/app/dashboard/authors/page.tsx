import { fetchFilteredAuthors } from '@/actions/author';
import { AuthorsTable } from '@/sections';
import { LatestProductsSkeleton } from '@/sections/LatestProductsSkeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';

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

  const authors = await fetchFilteredAuthors(query);

  return (
    <main>
      <Suspense fallback={<LatestProductsSkeleton />}>
        <AuthorsTable authors={authors} />
      </Suspense>
    </main>
  );
};

export default AuthorsPage;
