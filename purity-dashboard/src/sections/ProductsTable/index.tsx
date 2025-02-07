import Link from 'next/link';
import Image from 'next/image';
import { Status } from '@/components';
import { PencilIcon } from '@heroicons/react/24/outline';
import { DeleteProductButton } from '../DeleteProductButton';
import { fetchFilteredProducts } from '@/services';
import { formatCurrency, formatDateToLocal } from '@/utils';

export const ProductsTable = async ({
  query,
  currentPage
}: {
  query: string;
  currentPage: number;
}) => {
  const { products } = await fetchFilteredProducts(query, currentPage);

  return (
    <div className='mt-6 flow-root'>
      <div className='inline-block min-w-full align-middle'>
        <div className='rounded-lg bg-primary-100 p-2 md:pt-0'>
          <div className='md:hidden'>
            {products?.map((product) => (
              <div
                key={product.id}
                className='mb-2 w-full rounded-md bg-primary-100 p-4'
              >
                <div className='flex items-center justify-between border-b pb-4'>
                  <div>
                    <div className='mb-2 flex items-center'>
                      <Image
                        src={product.image_url}
                        className='mr-2 rounded-full'
                        width={28}
                        height={28}
                        alt={`${product.name}'s profile picture`}
                      />
                      <p>{product.name}</p>
                    </div>
                    <p className='text-sm text-secondary-300'>
                      {product.email}
                    </p>
                  </div>
                  <Status status={product.status} />
                </div>
                <div className='flex w-full items-center justify-between pt-4'>
                  <div>
                    <p className='text-xl font-medium'>
                      {formatCurrency(product.amount)}
                    </p>
                    <p>{formatDateToLocal(product.date)}</p>
                  </div>
                  <div className='flex justify-end gap-2'>
                    <Link
                      href={`/dashboard/products/${product.id}/edit`}
                      className='rounded-md border p-2 hover:bg-gray-100'
                    >
                      <PencilIcon className='w-5' />
                    </Link>
                    <DeleteProductButton id={product.id} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className='hidden min-w-full text-secondary-200 md:table'>
            <thead className='rounded-lg text-left text-sm font-normal'>
              <tr>
                <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                  Author
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Email
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Amount
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Date
                </th>
                <th scope='col' className='px-3 py-5 font-medium'>
                  Status
                </th>
                <th scope='col' className='relative py-3 pl-6 pr-3'>
                  <span className='sr-only'>Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className='bg-primary-100'>
              {products?.map((product) => (
                <tr
                  key={product.id}
                  className='w-full border-b py-3 text-sm text-secondary-300 last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg'
                >
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <div className='flex items-center gap-3'>
                      <Image
                        src={product.image_url}
                        className='rounded-full'
                        width={28}
                        height={28}
                        alt={`${product.name}'s profile picture`}
                      />
                      <p>{product.name}</p>
                    </div>
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {product.email}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {formatCurrency(product.amount)}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    {formatDateToLocal(product.date)}
                  </td>
                  <td className='whitespace-nowrap px-3 py-3'>
                    <Status status={product.status} />
                  </td>
                  <td className='whitespace-nowrap py-3 pl-6 pr-3'>
                    <div className='flex justify-end gap-3'>
                      <Link
                        href={`/dashboard/products/${product.id}/edit`}
                        className='rounded-md border p-2 hover:bg-gray-100'
                      >
                        <PencilIcon className='w-5' />
                      </Link>
                      <DeleteProductButton id={product.id} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
