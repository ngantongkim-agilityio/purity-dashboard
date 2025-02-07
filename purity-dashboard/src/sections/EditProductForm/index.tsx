'use client';

// libs
import { useActionState } from 'react';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';

// components
import { Button } from '@/components';

// actions
import { updateProduct } from '@/actions/product';

// types
import { AuthorField, ProductForm, ProductState } from '@/types';

export const EditProductForm = ({
  product,
  authors
}: {
  product: ProductForm;
  authors: AuthorField[];
}) => {
  const initialState: ProductState = {
    product: null,
    message: null,
    errors: {}
  };
  const updateProductWithId = updateProduct.bind(null, product.id);
  const [state, formAction] = useActionState(updateProductWithId, initialState);

  return (
    <form action={formAction}>
      <div className='rounded-md bg-primary-100 p-4 md:p-6'>
        {/* Author Name */}
        <div className='mb-4'>
          <label htmlFor='author' className='mb-2 block text-sm font-medium'>
            Choose author
          </label>
          <div className='relative'>
            <select
              id='author'
              name='authorId'
              className='peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              defaultValue={product.author_id}
              aria-describedby='author-error'
            >
              <option value='' disabled>
                Select a author
              </option>
              {authors.map((author) => (
                <option key={author.id} value={author.id}>
                  {author.name}
                </option>
              ))}
            </select>
            <UserCircleIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500' />
          </div>
          <div id='author-error' aria-live='polite' aria-atomic='true'>
            {state.errors?.authorId &&
              state.errors.authorId.map((error: string) => (
                <p className='mt-2 text-sm text-red-500' key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product Amount */}
        <div className='mb-4'>
          <label htmlFor='amount' className='mb-2 block text-sm font-medium'>
            Choose an amount
          </label>
          <div className='relative mt-2 rounded-md'>
            <div className='relative'>
              <input
                id='amount'
                name='amount'
                type='number'
                step='0.01'
                defaultValue={product.amount}
                placeholder='Enter USD amount'
                className='peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500'
              />
              <CurrencyDollarIcon className='pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
            </div>
          </div>
        </div>

        {/* Product Status */}
        <fieldset>
          <legend className='mb-2 block text-sm font-medium'>
            Set the product status
          </legend>
          <div className='rounded-md border border-gray-200 bg-primary-100 px-[14px] py-3'>
            <div className='flex gap-4'>
              <div className='flex items-center'>
                <input
                  id='pending'
                  name='status'
                  type='radio'
                  value='pending'
                  defaultChecked={product.status === 'pending'}
                  className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
                />
                <label
                  htmlFor='pending'
                  className='ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-primary-200 px-3 py-1.5 text-xs font-medium text-white'
                >
                  Pending <ClockIcon className='h-4 w-4' />
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  id='paid'
                  name='status'
                  type='radio'
                  value='paid'
                  defaultChecked={product.status === 'paid'}
                  className='h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2'
                />
                <label
                  htmlFor='paid'
                  className='ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white'
                >
                  Paid <CheckIcon className='h-4 w-4' />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className='mt-6 flex justify-end gap-4'>
        <Link
          href='/dashboard/products'
          className='flex items-center rounded-xl bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200'
        >
          Cancel
        </Link>
        <Button variant='outline' color='default' type='submit'>
          Edit
        </Button>
      </div>
    </form>
  );
};
