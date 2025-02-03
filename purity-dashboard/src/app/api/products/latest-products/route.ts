import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { LatestProductRaw } from '@/types';
import { formatCurrency } from '@/utils';

export const GET = async (request: NextRequest) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const data = await sql<LatestProductRaw>`
    SELECT products.amount, authors.name, authors.image_url, authors.email, products.id
    FROM products
    JOIN authors ON products.author_id = authors.id
    ORDER BY products.date DESC
    LIMIT 5`;

    const latestProducts = data.rows.map((product) => ({
      ...product,
      amount: formatCurrency(product.amount)
    }));

    return NextResponse.json(latestProducts, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
};
