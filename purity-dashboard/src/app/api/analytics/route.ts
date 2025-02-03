import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { formatCurrency } from '@/utils';

export const GET = async (request: NextRequest) => {
  const productCountPromise = sql`SELECT COUNT(*) FROM products`;
  const authorCountPromise = sql`SELECT COUNT(*) FROM authors`;
  const productStatusPromise = sql`SELECT
       SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
       SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
       FROM products`;

  await new Promise((resolve) => setTimeout(resolve, 500));
  try {
    const data = await Promise.all([
      productCountPromise,
      authorCountPromise,
      productStatusPromise
    ]);

    const numberOfProducts = Number(data[0].rows[0].count ?? '0');
    const numberOfAuthors = Number(data[1].rows[0].count ?? '0');
    const totalPaidProducts = formatCurrency(data[2].rows[0].paid ?? '0');
    const totalPendingProducts = formatCurrency(data[2].rows[0].pending ?? '0');

    const analytics = {
      numberOfProducts,
      numberOfAuthors,
      totalPaidProducts,
      totalPendingProducts
    };

    return NextResponse.json(analytics, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
};
