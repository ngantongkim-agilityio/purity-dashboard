// libs
import { revalidatePath, revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';

// constants
import { BASE_API, ITEMS_PER_PAGE, ROUTES, ROUTE_ENDPOINT } from '@/constants';

// schemas
import { ProductFormSchema } from '@/schemas';

// types
import {
  LatestProductRaw,
  ProductForm,
  ProductState,
  ProductsTable
} from '@/types';

export const fetchLatestProducts = async (): Promise<{
  products: LatestProductRaw[];
  error: string | null;
}> => {
  try {
    const url = `${BASE_API}/${ROUTE_ENDPOINT.PRODUCTS.LATEST_PRODUCTS}`;
    const response = await fetch(url, {
      next: {
        tags: ['latest-products'],
        revalidate: 3600
      }
    });
    const products = await response.json();

    return {
      products,
      error: null
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to fetch the latest products.';

    return { products: [], error: errorMessage };
  }
};

export const fetchProductsPages = async (
  query?: string
): Promise<{
  totalPages: number;
  error: string | null;
}> => {
  try {
    const url = `${BASE_API}/${ROUTE_ENDPOINT.PRODUCTS.PRODUCTS_PAGES}?query=${query}`;
    const response = await fetch(url, {
      next: {
        tags: ['products-pages'],
        revalidate: 3600
      }
    });
    const totalPages = await response.json();

    return {
      totalPages,
      error: null
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Failed to fetch the total products pages.';

    return { totalPages: 0, error: errorMessage };
  }
};

export const fetchFilteredProducts = async (
  query: string,
  currentPage: number
): Promise<{
  products: ProductsTable[];
  error: string | null;
}> => {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const url = `${BASE_API}/${ROUTE_ENDPOINT.PRODUCTS.FILTERED_PRODUCTS}?query=${query}&offset=${offset}`;
    const response = await fetch(url, {
      next: {
        tags: ['filtered-authors'],
        revalidate: 3600
      }
    });
    const products = await response.json();

    return { products: products.rows, error: null };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to fetch products.';

    return { products: [], error: errorMessage };
  }
};

export const fetchProductById = async (
  id: string
): Promise<{
  product: {
    id: string;
    author_id: string;
    amount: number;
    status: 'pending' | 'paid';
  } | null;
  error: string | null;
}> => {
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

    return { product: product[0], error: null };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to fetch product.';

    return { product: null, error: errorMessage };
  }
};

const CreateProduct = ProductFormSchema.omit({ id: true, date: true });

export const createProduct = async (
  prevState: ProductState,
  formData: FormData
): Promise<{
  product: any | null;
  errors?: any | null;
  message?: string | null;
}> => {
  const validatedFields = CreateProduct.safeParse({
    authorId: formData.get('authorId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  });

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      product: null,
      errors: validatedFields.error.flatten().fieldErrors
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

    revalidateTag('latest-products');
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to create product.';

    return { product: null, message: errorMessage };
  }

  // Revalidate the cache for the products page and redirect the user.
  revalidatePath(ROUTES.PRODUCTS);
  redirect(ROUTES.PRODUCTS);
};

const UpdateProduct = ProductFormSchema.omit({ id: true, date: true });

export const updateProduct = async (
  id: string,
  prevState: ProductState,
  formData: FormData
): Promise<{
  product: any | null;
  errors?: any | null;
  message?: string | null;
}> => {
  const validatedFields = UpdateProduct.safeParse({
    authorId: formData.get('authorId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  });

  if (!validatedFields.success) {
    return {
      product: null,
      errors: validatedFields.error.flatten().fieldErrors
    };
  }

  const { authorId, amount, status } = validatedFields.data;
  const amountInCents = amount * 100;

  // Insert data into the database
  try {
    await sql`
      UPDATE products
      SET author_id = ${authorId}, amount = ${amountInCents}, status = ${status}
      WHERE id = ${id}
    `;

    revalidateTag('latest-products');
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Failed to update product.';

    return { product: null, message: errorMessage };
  }

  // Revalidate the cache for the products page and redirect the user.
  revalidatePath(ROUTES.PRODUCTS);
  redirect(ROUTES.PRODUCTS);
};

export const deleteProduct = async (
  id: string
): Promise<{
  message?: string | null;
}> => {
  try {
    await sql`DELETE FROM products WHERE id = ${id}`;

    revalidateTag('latest-products');
    revalidatePath(ROUTES.PRODUCTS);

    return { message: 'Deleted Product Success.' };
  } catch (error) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : 'Database Error: Failed to delete Product.';

    return { message: errorMessage };
  }
};
