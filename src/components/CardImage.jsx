import React from 'react';
import Image from 'next/image';
import BtnAdd from './buttons/BtnAdd';

function CardImage({
  src,
  imageClassName,
  title,
  subTitle,
  alt,
  on,
  handleClick,
  titleImage,
}) {
  return (
    <div className='relative '>
      <div className='group' onClick={handleClick}>
        <Image
          alt={alt}
          src={src}
          height={427}
          width={956}
          className={imageClassName}
        />
        <div className='absolute inset-0 flex items-center justify-center text-white md:text-xl font-bold'>
          {titleImage}
        </div>
      </div>
      <p className='text-sm md:text-lg font-extrabold mt-2'>{title}</p>
      <p className='text-sm md:text-base font-bold m-2'>{subTitle}</p>
      <div className='flex justify-center items-center mt-4 mb-4'>
        {on && <BtnAdd />}
      </div>
    </div>
  );
}

export default CardImage;
