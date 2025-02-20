import Image from 'next/image';
import { SearchInput } from '@/components';
import { FormattedAuthorsTable } from '@/types';

export const AuthorsTable = ({
  authors
}: {
  authors: FormattedAuthorsTable[];
}) => {
  return (
    <div className='w-full'>
      <h1 className={`mb-8 text-xl md:text-2xl`}>Authors</h1>
      <SearchInput placeholder='Search authors...' />
      <div className='mt-6 flow-root'>
        <div className='overflow-x-auto'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden rounded-md bg-primary-100 p-2 md:pt-0'>
              <div className='md:hidden'>
                {authors?.map((author) => (
                  <div
                    key={author.id}
                    className='mb-2 w-full rounded-md bg-primary-100 p-4'
                  >
                    <div className='flex items-center justify-between border-b pb-4'>
                      <div>
                        <div className='mb-2 flex items-center'>
                          <div className='flex items-center gap-3'>
                            <Image
                              src={author.image_url}
                              className='rounded-full'
                              alt={`${author.name}'s profile picture`}
                              width={28}
                              height={28}
                            />
                            <p>{author.name}</p>
                          </div>
                        </div>
                        <p className='text-sm text-gray-500'>{author.email}</p>
                      </div>
                    </div>
                    <div className='flex w-full items-center justify-between border-b py-5'>
                      <div className='flex w-1/2 flex-col'>
                        <p className='text-xs'>Pending</p>
                        <p className='font-medium'>{author.total_pending}</p>
                      </div>
                      <div className='flex w-1/2 flex-col'>
                        <p className='text-xs'>Paid</p>
                        <p className='font-medium'>{author.total_paid}</p>
                      </div>
                    </div>
                    <div className='pt-4 text-sm'>
                      <p>{author.total_products} products</p>
                    </div>
                  </div>
                ))}
              </div>
              <table className='hidden min-w-full rounded-md text-secondary-200 md:table'>
                <thead className='rounded-md bg-primary-100 text-left text-sm font-normal'>
                  <tr>
                    <th scope='col' className='px-4 py-5 font-medium sm:pl-6'>
                      Name
                    </th>
                    <th scope='col' className='px-3 py-5 font-medium'>
                      Email
                    </th>
                    <th scope='col' className='px-3 py-5 font-medium'>
                      Total Products
                    </th>
                    <th scope='col' className='px-3 py-5 font-medium'>
                      Total Pending
                    </th>
                    <th scope='col' className='px-4 py-5 font-medium'>
                      Total Paid
                    </th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-gray-200 text-gray-900'>
                  {authors.map((author) => (
                    <tr key={author.id} className='group text-secondary-300'>
                      <td className='whitespace-nowrap bg-primary-100 py-5 pl-4 pr-3 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6'>
                        <div className='flex items-center gap-3'>
                          <Image
                            src={author.image_url}
                            className='rounded-full'
                            alt={`${author.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p>{author.name}</p>
                        </div>
                      </td>
                      <td className='whitespace-nowrap bg-primary-100 px-4 py-5 text-sm'>
                        {author.email}
                      </td>
                      <td className='whitespace-nowrap bg-primary-100 px-4 py-5 text-sm'>
                        {author.total_products}
                      </td>
                      <td className='whitespace-nowrap bg-primary-100 px-4 py-5 text-sm'>
                        {author.total_pending}
                      </td>
                      <td className='whitespace-nowrap bg-primary-100 px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md'>
                        {author.total_paid}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
