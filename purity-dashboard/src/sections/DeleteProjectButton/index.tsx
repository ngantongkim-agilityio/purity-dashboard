'use client';

import { deleteInvoice } from '@/actions/project';
import { TrashIcon } from '@heroicons/react/24/outline';

export const DeleteProjectButton = ({ id }: { id: string }) => {
  const deleteInvoiceWithId = deleteInvoice.bind(null, id) as () => void;

  return (
    <form action={deleteInvoiceWithId}>
      <button type='submit' className='rounded-md border p-2 hover:bg-gray-100'>
        <span className='sr-only'>Delete</span>
        <TrashIcon className='w-5' />
      </button>
    </form>
  );
};
