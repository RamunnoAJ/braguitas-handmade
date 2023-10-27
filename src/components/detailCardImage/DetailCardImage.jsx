'use client';

// DetailCardImage.js
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import imgExample1 from '../../app/assets/clothes-1.jpg';
import imgExample2 from '../../app/assets/clothes-2.jpg';
import imgExample3 from '../../app/assets/clothes-3.jpg';
import imgExample4 from '../../app/assets/clothes-4.jpg';
import CardImage from '../CardImage';
import Select from './Select';
import Button from '../buttons/Button';
import QuantityStock from './QuantityStock';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DetailCardImage = () => {
  const [selectedValue, setSelectedValue] = useState('option1');
  const [selectedImage, setSelectedImage] = useState(imgExample1);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  const options = [
    { value: 'Option 1', label: 'XS' },
    { value: 'Option 2', label: 'S' },
    { value: 'Option 3', label: 'M' },
    { value: 'Option 4', label: 'L' },
    { value: 'Option 5', label: 'XL' },
  ];

  const images = [imgExample1, imgExample2, imgExample3, imgExample4];

  const handleSelectChange = e => {
    setSelectedValue(e.target.value);
  };

  const handleThumbnailClick = (src, index) => {
    setSelectedImage(src);
    setSelectedThumbnailIndex(index);
  };

  return (
    <div className='flex flex-col md:flex-row justify-center my-10 mx-6'>
      <div className='hidden md:block grid-cols-1 justify-center items-center mx-6'>
        <CardImage
          src={selectedImage}
          alt='1'
          imageClassName='w-[472px] h-[450px] mb-4 object-cover'
        />
        <div className='flex gap-3 '>
          {images.map((imgSrc, index) => (
            <CardImage
              key={index}
              src={imgSrc}
              alt={`Image ${index}`}
              imageClassName={`w-[110px] h-[110px] object-cover ${
                index === selectedThumbnailIndex ? 'ring-4 ring-purple-500' : ''
              }`}
              handleClick={() => handleThumbnailClick(imgSrc, index)}
            />
          ))}
        </div>
      </div>
      <Carousel
        className='md:hidden'
        showArrows={true}
        selectedItem={selectedThumbnailIndex}
        emulateTouch={true}
        showThumbs={false}
        dynamicHeight={false}
        showStatus={false}
        infiniteLoop={true}>
        {images.map((imgSrc, index) => (
          <CardImage
            key={index}
            src={imgSrc}
            alt={`Image ${index}`}
            imageClassName='w-[330px] h-[330px] object-cover mb-10'
            handleClick={() => handleThumbnailClick(imgSrc, index)}
          />
        ))}
      </Carousel>

      <div className='flex flex-col items-center justify-center mt-10'>
        <div>
          <p className='text-2xl md:text-3xl font-bold uppercase'>
            Nombre producto
          </p>
          <p className='uppercase text-lg my-2 '>Categoria producto</p>
          <p className='md:w-[380px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className='font-bold mt-4 mb-10 md:mb-28 text-xl uppercase '>
            Precio
          </p>
        </div>
        <div className='flex gap-3'>
          <div className='flex flex-col'>
            <p className='font-bold my-2'>Talle:</p>
            <Select
              options={options}
              selectedValue={selectedValue}
              onChange={handleSelectChange}
            />
          </div>
          <div className='flex flex-col'>
            <p className='font-bold my-2'>Cantidad:</p>
            <QuantityStock />
          </div>
        </div>
        <div className='flex flex-col gap-4 my-4 w-[330px] sm:w-[378px]'>
          <Button cx='bg-[#530586] text-white '>Añadir al carrito</Button>
          <Button cx='bg-[#E8D0EF] '>avisarme cuando haya stock</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailCardImage;
