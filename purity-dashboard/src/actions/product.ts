'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { ProductForm, ProductsTable, LatestProductRaw } from '@/types';
import { formatCurrency } from '@/utils';

export type State = {
  errors?: {
    authorId?: string[];
    amount?: string[];
    status?: string[];
  };
  message?: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  authorId: z.string({
    invalid_type_error: 'Please select a author.'
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an product status.'
  }),
  date: z.string()
});

const CreateProduct = FormSchema.omit({ id: true, date: true });

export const createProduct = async (prevState: State, formData: FormData) => {
  const validatedFields = CreateProduct.safeParse({
    authorId: formData.get('authorId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Product.'
    };
  }

  // Prepare data for insertion into the database
  const { authorId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  // Insert data into the database
  try {
    await sql`
      INSERT INTO products (author_id, amount, status, date)
      VALUES (${authorId}, ${amountInCents}, ${status}, ${date})
    `;
  } catch (error) {
    // If a database error occurs, return a more specific error.
    console.log('Database Error', error);
    return {
      message: 'Database Error: Failed to Create Product.'
    };
  }

  // Revalidate the cache for the products page and redirect the user.
  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

// Use Zod to update the expected types
const UpdateProduct = FormSchema.omit({ id: true, date: true });

export const updateProduct = async (
  id: string,
  prevState: State,
  formData: FormData
) => {
  const validatedFields = UpdateProduct.safeParse({
    authorId: formData.get('authorId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Product.'
    };
  }

  const { authorId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  try {
    await sql`
      UPDATE products
      SET author_id = ${authorId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;
  } catch (error) {
    console.log('Database Error', error);
    return { message: 'Database Error: Failed to Update Product.' };
  }

  revalidatePath('/dashboard/products');
  redirect('/dashboard/products');
};

export const deleteProduct = async (id: string) => {
  try {
    await sql`DELETE FROM products WHERE id = ${id}`;
    revalidatePath('/dashboard/products');
    return { message: 'Deleted Product.' };
  } catch (error) {
    console.log('Database Error', error);
    return { message: 'Database Error: Failed to Delete Product.' };
  }
};

export const fetchLatestProducts = async () => {
  try {
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
    return latestProducts;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest products.');
  }
};

const ITEMS_PER_PAGE = 6;
export const fetchFilteredProducts = async (
  query: string,
  currentPage: number
) => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
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

    return products.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch products.');
  }
};

export const fetchProductsPages = async (query: string) => {
  try {
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
    return totalPages;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch total number of products.');
  }
};

export const fetchProductById = async (id: string) => {
  try {
    const data = await sql<ProductForm>`
      SELECT
        products.id,
        products.author_id,
        products.amount,
        products.status
      FROM products
      WHERE products.id = ${id};
    `;

    const product = data.rows.map((product) => ({
      ...product,
      // Convert amount from cents to dollars
      amount: product.amount / 100
    }));

    return product[0];
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch product.');
  }
};
