import { Image, Text } from '@/components';
import { IMAGES } from '@/constants';
import { ArrowIcon } from '@/icons';
import { generateImageToBase64 } from '@/utils';
import Link from 'next/link';

export const ReadMore = () => {
  return (
    <div className='flex flex-col xl:flex-row xl:justify-between gap-6'>
      <div className='xl:w-3/5 flex justify-between w-full bg-primary-100 rounded-xl p-4 shadow-secondary-50 shadow-md'>
        <div className='max-w-[330px] flex flex-col justify-between'>
          <div className='space-y-0.5'>
            <Text size='xs' className='font-bold text-secondary-200'>
              Build by developers
            </Text>
            <Text color='tertiary' size='lg' className='font-bold'>
              Purity UI Dashboard
            </Text>
            <Text className='text-secondary-200'>
              From colors, cards, typography to complex elements, you will find
              the full documentation.
            </Text>
          </div>
          <Link href={'#'} className='flex items-center gap-1'>
            <Text className='text-xxs font-bold'>Read more</Text>
            <ArrowIcon />
          </Link>
        </div>
        <div className='relative w-[360px] h-[255px]'>
          <Image
            alt='purity ui dashboard read more'
            src={IMAGES.buildReadMore}
            blurDataURL={generateImageToBase64(360, 255)}
            className='rounded-xl'
          />
        </div>
      </div>
      <div className='xl:w-2/5 bg-primary-100 rounded-xl p-4 shadow-secondary-50 shadow-md'>
        <div className='relative rounded-xl w-full h-[255px]'>
          <Image
            alt='rockets read more background'
            src={IMAGES.rocketsReadMore}
            blurDataURL={generateImageToBase64(300, 255)}
            className='rounded-xl'
          />
          <div className='absolute top-0 left-0 z-10 p-4 h-full w-full flex flex-col justify-between'>
            <div className='space-y-0.5'>
              <Text color='title' size='lg'>
                Work with the Rockets
              </Text>
              <Text className='font-light whitespace-pre-line'>
                Wealth creation is an evolutionarily recent positive-sum game.
                {`\n`}
                It is all about who take the opportunity first.
              </Text>
            </div>
            <Link
              href={'#'}
              className='flex items-center gap-1 text-primary-100'
            >
              <Text size='xxs'>Read more</Text>
              <ArrowIcon customClass='w-3 h-3 text-primary-100' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
