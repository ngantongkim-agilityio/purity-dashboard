import { sql } from '@vercel/postgres';

import { Revenue } from '@/types';
import { formatCurrency } from '@/utils';

export const fetchRevenue = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
};

export const fetchCardData = async () => {
  try {
    // You can probably combine these into a single SQL query
    // However, we are intentionally splitting them to demonstrate
    // how to initialize multiple queries in parallel with JS.
    const productCountPromise = sql`SELECT COUNT(*) FROM products`;
    const authorCountPromise = sql`SELECT COUNT(*) FROM authors`;
    const productStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM products`;

    const data = await Promise.all([
      productCountPromise,
      authorCountPromise,
      productStatusPromise
    ]);

    const numberOfProducts = Number(data[0].rows[0].count ?? '0');
    const numberOfAuthors = Number(data[1].rows[0].count ?? '0');
    const totalPaidProducts = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingProducts = formatCurrency(data[2].rows[0].pending ?? '0');

    return {
      numberOfAuthors,
      numberOfProducts,
      totalPaidProducts,
      totalPendingProducts
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
};
