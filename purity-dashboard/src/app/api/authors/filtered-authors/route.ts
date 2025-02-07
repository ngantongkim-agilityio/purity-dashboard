import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { AuthorsTableType } from '@/types';
import { formatCurrency } from '@/utils';

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';

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

    return NextResponse.json(authors, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
};
