// libs
import Image from 'next/image';
import { ArrowPathIcon } from '@heroicons/react/24/outline';

// components
import { Text } from '@/components';

// services
import { fetchLatestProducts } from '@/services';

// utils
import { cn } from '@/utils';

export const LatestProducts = async () => {
  const { products } = await fetchLatestProducts();

  return (
    <div className='flex w-full flex-col md:col-span-4 bg-primary-100 rounded-xl shadow-secondary-50 shadow-md p-4 space-y-2'>
      <Text variant='h3' size='lg' color='subTitle'>
        Latest Products
      </Text>
      <div className='flex grow flex-col justify-between'>
        <div className='bg-white px-6'>
          {products.map((product, i) => {
            return (
              <div
                key={product.id}
                className={cn(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0
                  }
                )}
              >
                <div className='flex items-center'>
                  <Image
                    src={product.image_url}
                    alt={`${product.name}'s profile picture`}
                    className='mr-4 rounded-full'
                    width={32}
                    height={32}
                  />
                  <div className='min-w-0'>
                    <p className='truncate text-sm font-semibold md:text-base'>
                      {product.name}
                    </p>
                    <p className='hidden text-sm text-gray-500 sm:block'>
                      {product.email}
                    </p>
                  </div>
                </div>
                <p className={`truncate text-sm font-medium md:text-base`}>
                  {product.amount}
                </p>
              </div>
            );
          })}
        </div>
        <div className='flex items-center pb-2 pt-6'>
          <ArrowPathIcon className='h-5 w-5 text-gray-500' />
          <h3 className='ml-2 text-sm text-gray-500 '>Updated just now</h3>
        </div>
      </div>
    </div>
  );
};
