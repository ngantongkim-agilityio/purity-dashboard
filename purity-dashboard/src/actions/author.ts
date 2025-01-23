import { AuthorField, AuthorsTableType } from '@/types';
import { formatCurrency } from '@/utils';
import { sql } from '@vercel/postgres';

export const fetchAuthors = async () => {
  try {
    const data = await sql<AuthorField>`
      SELECT
        id,
        name
      FROM authors
      ORDER BY name ASC
    `;

    const authors = data.rows;
    return authors;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch all authors.');
  }
};

export const fetchFilteredAuthors = async (query: string) => {
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

    return authors;
  } catch (err) {
    console.error('Database Error:', err);
    throw new Error('Failed to fetch author table.');
  }
};
