// Components
import { Text } from '@/components';
import { CalendarIcon } from '@heroicons/react/24/outline';

// Services
import { fetchRevenue } from '@/services';

// Utils
import { generateYAxis } from '@/utils';

export const SaleChart = async () => {
  const { revenue } = await fetchRevenue();

  const chartHeight = 250;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className='mt-4 text-gray-400'>No data available.</p>;
  }

  return (
    <div className='w-full md:col-span-4 bg-primary-100 rounded-xl shadow-secondary-50 shadow-md p-4 space-y-2'>
      <Text variant='h3' size='lg' color='subTitle'>
        Sale overview
      </Text>
      <div className='flex flex-start gap-4 items-end rounded-xl p-4 bg-gradient-to-r from-dark-100 from-0% to-dark-200 to-100%'>
        <div
          className='mb-6 hidden flex-col justify-between text-sm text-primary-100 sm:flex'
          style={{ height: `${chartHeight}px` }}
        >
          {yAxisLabels.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </div>

        <div className='w-full grid grid-cols-12 gap-4 items-end'>
          {revenue.map((month) => (
            <div key={month.month} className='flex flex-col items-center gap-2'>
              <div
                className='w-2 rounded-md bg-primary-100'
                style={{
                  height: `${(chartHeight / topLabel) * month.revenue}px`
                }}
              ></div>
              <p className='-rotate-90 text-sm text-grey-200 sm:rotate-0'>
                {month.month}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex items-center pt-3 space-x-2'>
        <CalendarIcon className='h-5 w-5 text-secondary-200' />
        <Text className='text-secondary-200'>Last 12 months</Text>
      </div>
    </div>
  );
};
