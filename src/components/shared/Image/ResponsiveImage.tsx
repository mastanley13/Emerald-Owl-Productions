'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type ResponsiveImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
  fallbackSrc?: string;
};

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  fill = false,
  className = '',
  sizes = '100vw',
  priority = false,
  fallbackSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEGAIUZxbMZgAAAABJRU5ErkJggg==',
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [hasError, setHasError] = useState<boolean>(false);

  // This is a workaround for Next.js Image onError handling
  const handleError = () => {
    if (!hasError) {
      console.log('Image failed to load:', src);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  // Use a fallback div with background if all else fails
  if (hasError && fallbackSrc === imgSrc) {
    return (
      <div 
        className={`${className} bg-emerald-700 flex items-center justify-center`}
        style={{ 
          position: fill ? 'absolute' : 'relative',
          top: fill ? 0 : undefined,
          left: fill ? 0 : undefined,
          bottom: fill ? 0 : undefined,
          right: fill ? 0 : undefined,
          width: fill ? '100%' : undefined,
          height: fill ? '100%' : undefined,
        }}
      >
        <span className="text-white text-opacity-70">{alt}</span>
      </div>
    );
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={`${className} ${hasError ? 'bg-emerald-700' : ''}`}
      sizes={sizes}
      priority={priority}
      onError={handleError}
    />
  );
};

export default ResponsiveImage; 