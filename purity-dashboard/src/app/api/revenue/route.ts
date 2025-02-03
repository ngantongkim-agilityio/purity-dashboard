import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { Revenue } from '@/types';

export const GET = async (request: NextRequest) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const data = await sql<Revenue>`SELECT * FROM revenue`;

    return NextResponse.json(data.rows, {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
};
