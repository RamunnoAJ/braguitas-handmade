import React, { useState } from 'react';
import Image from 'next/image';
import Button from './buttons/Button';

const ProductCard = ({ title, image, price, stock, isNew }) => {
  const [isMobile, setIsMobile] = useState('Añadir al carrito');

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setIsMobile('Comprar');
    } else {
      setIsMobile('Añadir al carrito');
    }
  };

  window.addEventListener('resize', handleResize);

  return (
    <article className='flex flex-col justify-between gap-4 w-full max-w-[160px] h-[250px] md:h-[371px] md:max-w-[231px]'>
      <div className='relative w-full h-[135px] md:h-[225px]'>
        {isNew && <span className='absolute top-2 left-2'>¡Nuevo!</span>}
        {!stock && <span className='absolute top-2 left-2'>Sin stock</span>}
        <Image
          src={image}
          alt={title}
          fill={true}
          sizes='(min-width: 768px) 160px, 231px'
        />
      </div>
      <div className='flex flex-col gap-2 p-2'>
        <h2 className='text-sm font-bold'>{title}</h2>
        <p className='text-sm font-bold mb-2'>{price}</p>
        <Button cx='bg-[#530586] text-white w-full'>{isMobile}</Button>
      </div>
    </article>
  );
};

export default ProductCard;
