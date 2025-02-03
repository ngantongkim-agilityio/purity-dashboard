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
    const data = await sql<AuthorsTableType>`
		SELECT
		  authors.id,
		  authors.name,
		  authors.email,
		  authors.image_url,
		  COUNT(products.id) AS total_products,
		  SUM(CASE WHEN products.status = 'pending' THEN products.amount ELSE 0 END) AS total_pending,
		  SUM(CASE WHEN products.status = 'paid' THEN products.amount ELSE 0 END) AS total_paid
		FROM authors
		LEFT JOIN products ON authors.id = products.author_id
		WHERE
		  authors.name ILIKE ${`%${query}%`} OR
        authors.email ILIKE ${`%${query}%`}
		GROUP BY authors.id, authors.name, authors.email, authors.image_url
		ORDER BY authors.name ASC
	  `;

    const authors = data.rows.map((author) => ({
      ...author,
      total_pending: formatCurrency(author.total_pending),
      total_paid: formatCurrency(author.total_paid)
    }));

    return { authors, error: null };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to fetch authors.';
    return { authors: [], error: errorMessage };
  }
};
