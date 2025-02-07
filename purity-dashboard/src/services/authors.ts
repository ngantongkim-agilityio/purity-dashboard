import { BASE_API, ROUTE_ENDPOINT } from '@/constants';
import { AuthorData, AuthorField, AuthorsTableType } from '@/types';
import { formatCurrency } from '@/utils';
import { sql } from '@vercel/postgres';

export const fetchAuthors = async (): Promise<{
  authors: AuthorField[];
  error: string | null;
}> => {
  try {
    const data = await sql<AuthorField>`
      SELECT
        id,
        name
      FROM authors
      ORDER BY name ASC
    `;

    const authors = data.rows;
    return { authors, error: null };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to fetch all authors.';
    return { authors: [], error: errorMessage };
  }
};

export const fetchFilteredAuthors = async (
  query: string
): Promise<{
  authors: AuthorData[];
  error: string | null;
}> => {
  try {
    const url = `${BASE_API}/${ROUTE_ENDPOINT.AUTHORS.FILTERED_AUTHORS}?query=${query}`;
    const response = await fetch(url, {
      next: {
        tags: ['filtered-authors'],
        revalidate: 3600
      }
    });
    const authors = await response.json();

    return { authors, error: null };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to fetch authors.';
    return { authors: [], error: errorMessage };
  }
};
