import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { ProductsTable } from '@/types';
import { ITEMS_PER_PAGE } from '@/constants';

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query') || '';
    const offset = searchParams.get('offset') || '';

    const products = await sql<ProductsTable>`
      SELECT
        products.id,
        products.amount,
        products.date,
        products.status,
        authors.name,
        authors.email,
        authors.image_url
      FROM products
      JOIN authors ON products.author_id = authors.id
      WHERE
        authors.name ILIKE ${`%${query}%`} OR
        authors.email ILIKE ${`%${query}%`} OR
        products.amount::text ILIKE ${`%${query}%`} OR
        products.date::text ILIKE ${`%${query}%`} OR
        products.status ILIKE ${`%${query}%`}
      ORDER BY products.date DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;

    return NextResponse.json(products, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
};
