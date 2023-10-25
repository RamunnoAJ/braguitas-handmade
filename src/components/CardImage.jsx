import React from 'react';
import Image from 'next/image';

function CardImage({
  src,
  imageClassName,
  alt,
  handleClick,
  category,
  onCategory,
}) {
  return (
    <div>
      <div className='relative '>
        <div onClick={handleClick}>
          <Image
            alt={alt}
            src={src}
            height={427}
            width={956}
            className={imageClassName}
          />
          {onCategory && (
            <div className='absolute inset-0  flex items-center md:h-60 md:hover:bg-violet-400/75 justify-center bg-white/40 text-black md:text-xl font-bold '>
              {category}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CardImage;
