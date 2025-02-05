'use client';

// Libs
import { memo, useCallback, useState } from 'react';
import NextImage, { ImageProps } from 'next/image';

// Utils
import { cn } from '@/utils';
import { IMAGES } from '@/constants';

interface ImageFallbackProps extends ImageProps {
  src: string;
  alt: string;
  blurDataURL?: string;
  fallbackSrc?: string;
}

export const Image = memo(
  ({
    src,
    alt,
    blurDataURL,
    fallbackSrc = IMAGES.emptyImage,
    className,
    width,
    height,
    ...props
  }: ImageFallbackProps) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [isLoaded, setIsLoaded] = useState(false);

    const handleError = useCallback(
      () => setImgSrc(fallbackSrc),
      [fallbackSrc]
    );

    const handleLoad = useCallback(
      (event: React.SyntheticEvent<HTMLImageElement>) => {
        setIsLoaded(true);
        const img = event.currentTarget;
        if (img.naturalWidth === 0) setImgSrc(fallbackSrc);
      },
      [fallbackSrc]
    );

    return (
      <NextImage
        priority
        src={imgSrc}
        alt={alt}
        {...(width && height ? { width, height } : { fill: true })}
        {...(blurDataURL ? { placeholder: 'blur', blurDataURL } : {})}
        onLoad={handleLoad}
        onError={handleError}
        className={cn(
          'transition-opacity object-cover duration-200 ease-in-out',
          isLoaded ? 'opacity-100' : 'opacity-80',
          className
        )}
        {...props}
      />
    );
  }
);

Image.displayName = 'Image';
