import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { ITEMS_PER_PAGE } from '@/constants';

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';

    const count = await sql`SELECT COUNT(*)
    FROM products
    JOIN authors ON products.author_id = authors.id
    WHERE
      authors.name ILIKE ${`%${query}%`} OR
      authors.email ILIKE ${`%${query}%`} OR
      products.amount::text ILIKE ${`%${query}%`} OR
      products.date::text ILIKE ${`%${query}%`} OR
      products.status ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / ITEMS_PER_PAGE);

    return NextResponse.json(totalPages, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
};
