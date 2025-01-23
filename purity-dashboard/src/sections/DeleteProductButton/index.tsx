'use client';

import { deleteProduct } from '@/actions/product';
import { TrashIcon } from '@heroicons/react/24/outline';

export const DeleteProductButton = ({ id }: { id: string }) => {
  const deleteProductWithId = deleteProduct.bind(null, id) as () => void;

  return (
    <form action={deleteProductWithId}>
      <button type='submit' className='rounded-md border p-2 hover:bg-gray-100'>
        <span className='sr-only'>Delete</span>
        <TrashIcon className='w-5' />
      </button>
    </form>
  );
};
