'use client';

import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CardImage from './CardImage';

function CarouselHome() {
  const apiUrl = 'https://source.unsplash.com/';

  const [slides, setSlides] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSideImageClick = index => {
    setSelectedImageIndex(index);
  };

  const fetchImages = async () => {
    const imagePromises = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 4; i++) {
      imagePromises.push(
        fetch(`${apiUrl}956x427/?fashion`).then(response => response.url),
      );
    }

    const imageUrls = await Promise.all(imagePromises);
    setSlides(imageUrls);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (slides.length === 0) {
    return null;
  }

  return (
    <div className='relative z-10 '>
      <Carousel
        showArrows={true}
        centerMode={true}
        selectedItem={selectedImageIndex}
        emulateTouch={true}
        showThumbs={false}
        dynamicHeight={true}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}>
        {slides.map((slide, index) => (
          <CardImage
            handleClick={() => handleSideImageClick(index)}
            key={index}
            src={slide}
            alt={`url(${slide})`}
            imageClassName='h-[160px] w-[280px] sm:w-full sm:h-full object-cover  px-2 xl:px-6'
          />
        ))}
      </Carousel>
      <div className='grid md:grid-cols-4 xl:mx-52 sm:mx-20 grid-cols-2 gap-4 p-2 mt-10'>
        {slides.map((slide, index) => (
          <CardImage
            titleImage={` Categoria ${index + 1}`}
            handleClick={() => handleSideImageClick(index)}
            key={index}
            src={slide}
            alt={`url(${slide})`}
            imageClassName={`object-cover text-white flex items-center justify-center font-semibold w-full h-32 xl:h-60 bg-cover ring-2 ${
              index === selectedImageIndex
                ? 'ring-purple-500'
                : 'ring-transparent'
            }`}
          />
        ))}
      </div>
      <div className='grid md:grid-cols-4 xl:mx-52 sm:mx-20 grid-cols-2 gap-4 p-2 mt-10'>
        {slides.map((slide, index) => (
          <CardImage
            key={index}
            src={slide}
            alt={`url(${slide})`}
            title='Nombre del producto'
            subTitle='Precio'
            on={true}
            imageClassName='w-[160px] h-[125px] md:w-[231px] md:h-[221px] object-cover'
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselHome;
