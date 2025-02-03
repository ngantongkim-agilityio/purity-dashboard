'use server';

// services
import {
  fetchProductById as fetchProductByIdService,
  fetchFilteredProducts as fetchFilteredProductsService,
  createProduct as createProductService,
  updateProduct as updateProductService,
  deleteProduct as deleteProductService
} from '@/services';

// types
import { ProductState, ProductsTable } from '@/types';

export const fetchFilteredProducts = async (
  query: string,
  currentPage: number
): Promise<{
  products: ProductsTable[];
  error: string | null;
}> => {
  const data = await fetchFilteredProductsService(query, currentPage);
  return data;
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
  const data = await fetchProductByIdService(id);
  return data;
};

export const createProduct = async (
  prevState: ProductState,
  formData: FormData
): Promise<{
  product: {
    id: string;
    author_id: string;
    amount: number;
    status: 'pending' | 'paid';
  } | null;
  errors?: any | null;
  message?: string | null;
}> => {
  const data = await createProductService(prevState, formData);
  return data;
};

export const updateProduct = async (
  id: string,
  prevState: ProductState,
  formData: FormData
): Promise<{
  product: {
    id: string;
    author_id: string;
    amount: number;
    status: 'pending' | 'paid';
  } | null;
  errors?: any | null;
  message?: string | null;
}> => {
  const data = await updateProductService(id, prevState, formData);
  return data;
};

export const deleteProduct = async (
  id: string
): Promise<{
  message?: string | null;
}> => {
  const data = await deleteProductService(id);
  return data;
};
